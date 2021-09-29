import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { draftDTO } from 'src/dto/draft.dto';
import { Draftdata } from 'src/entity/draftdata';
import { Repository } from 'typeorm';

@Injectable()
export class DraftService {

    constructor(
        @InjectRepository(Draftdata) private readonly draftRepository: Repository<Draftdata>
      
        ){}

        async getall(){

            const emps: any[] = await this.draftRepository.find()
            //console.log("sathya")
            const dto: draftDTO[] = emps.map(x=> this.entityToDTO(x))
            console.log(dto);
            
            return dto
          }

          private entityToDTO(data : Draftdata): draftDTO{

            const datadto = new draftDTO();
            datadto.id = data.id
            datadto.data=data.data
            datadto.adminid=data.adminid
            datadto.cid=data.cid

            return datadto
        }
}
