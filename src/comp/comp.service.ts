import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compDTO } from 'src/dto/comp.dto';
import { Comp } from 'src/entity/comp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompService {
    constructor(@InjectRepository(Comp)private repo: Repository<Comp>){}

    public async add(data: compDTO){
        const comp: Comp = new Comp();
       // emp.id = createEmployeeRequest.id
       comp.id = data.id
       comp.name = data.name
       comp.adminid = data.adminid


        //console.log("name",emp.name)
        await this.repo.save(comp)
        const DTO = this.entityToDTO(comp)
        return DTO
    }

    
    private entityToDTO(data : Comp): compDTO{
        const comp = new compDTO();
        comp.id = data.id
        comp.name = data.name
        comp.adminid = data.adminid
        return comp
    }
  
}
