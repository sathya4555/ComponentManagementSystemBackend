import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ComponentService } from 'src/component/component.service';
import { videodataDTO } from 'src/dto/videodata.dto';
import { VideoDataService } from './video-data.service';

@Controller('video-data')
export class VideoDataController {
    constructor(private readonly viderservice: VideoDataService
      ) {
            
       }

       @Post('add')
public async createOne(@Body() videodataDTO: videodataDTO){
    const result = await this.viderservice.add(videodataDTO);
    return result
}
}
