import { CompService } from './comp.service';
import { Body, Controller, Post } from '@nestjs/common';
import { compDTO } from 'src/dto/comp.dto';

@Controller('comp')
export class CompController {
    constructor(private readonly service: CompService
        ) {
              
         }

         @Post('add')
         public async createOne(@Body() DTO: compDTO){
             const result = await this.service.add(DTO);
             return result
         }
}
