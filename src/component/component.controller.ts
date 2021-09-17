import { BadGatewayException, BadRequestException, Body, Controller, Delete, Get, Header, Post, Query, Req, Res, UnauthorizedException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { get } from 'http';
import { AppService } from 'src/app.service';
import { ComponentService } from './component.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import {Response, Request} from 'express';
import { SNS_SQS } from 'src/Submodules/SNS_SQS';
import { Message } from 'requestmodal/Message';
import { RequestModel } from 'requestmodal/RequestModel';
import { ResponseModel } from 'requestmodal/ResponseModel';
@Controller('component')
export class ComponentController {
  constructor(private readonly appService: ComponentService,
    private jwtService: JwtService
  ) {
 
   }


@Get()
  async getAll(){
    console.log("inside get all");
    
     const result= await this.appService.getall();
      return result
  }




  @Post('upload')
  @UseInterceptors(FileInterceptor('myfile'))
  async upload(@UploadedFile() file: Express.Multer.File): Promise<string> {
    await this.appService.upload(file);
    return "uploaded";
  }

  @Get('read-image')
  // @Header('Content-Type','image/jpg')
  async readImage(@Res() res, @Query('filename') filename) {
    const file = await this.appService.getfileStream(filename);
    return file.pipe(res);
  }


  @Get('played')
  async played(@Query('time') time, @Query('name') name) {
    await this.appService.getTime(time, name);
    console.log("inside controllers get played");
  }

  @Delete('delete-image')
  async delete(@Body() body:any) {
    await this.appService.delete(body);
    return "deleted";
  }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('name') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await this.appService.register({
      name,
      password: hashedPassword
  });

  delete user.password;

  return user;
  }


  @Post('login')
  async login(
    @Body('name') name: string,
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response
  ) {
    const user = await this.appService.findOne({ name })

    if (!user) {
      throw new BadRequestException('User not Found')
    }

    if (!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('invalid credentials');



    }
    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, {httpOnly: true});
    return {
      message: 'success'
  };
  }

  @Get('user')
    async user(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.appService.findOne({id: data['id']});

            const {password, ...result} = user;

            return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }

    
    @Post('draft_add')
    async draftAdd(@Body() body: string) {
     let result = await this.appService.draftAdd(body);
        return result
    }





    


}
