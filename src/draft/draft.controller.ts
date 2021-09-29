import { Controller, Get } from '@nestjs/common';
import { DraftService } from './draft.service';

@Controller('draft')
export class DraftController {

    constructor(private readonly service: DraftService,
      ) {
       }

       @Get()
       async getAll(){
          const result= await this.service.getall();
           return result
       }

}
