import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { videodataDTO } from 'src/dto/videodata.dto';
import { Videodata } from 'src/entity/videodata.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoDataService{
    constructor(@InjectRepository(Videodata)private videorepository: Repository<Videodata>){}

    public async add(videodata: videodataDTO){
        const video: Videodata = new Videodata();
       // emp.id = createEmployeeRequest.id
       video.videoname = videodata.videoname
       video.vname = videodata.vname
       video.mark = videodata.mark
       video.desc = videodata.desc
       video.cid = videodata.cid

        //console.log("name",emp.name)
        await this.videorepository.save(video)

        const videoDTO = this.entityToDTO(video)

        return videoDTO
    }

    private entityToDTO(emp : Videodata): videodataDTO{

        const empdto = new videodataDTO();
        empdto.videoname = emp.videoname
        empdto.mark = emp.mark
        empdto.vname = emp.vname
        empdto.desc = emp.desc
        empdto.cid = emp.cid


        return empdto
    }
  

}


