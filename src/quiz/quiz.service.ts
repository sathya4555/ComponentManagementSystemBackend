import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { quizDTO } from 'src/dto/quiz.dto';
import { videodataDTO } from 'src/dto/videodata.dto';
import { Quiz } from 'src/entity/quiz.entity';
import { Videodata } from 'src/entity/videodata.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz)private repo: Repository<Quiz>){}


    public async add(data: quizDTO){
        const obj: Quiz = new Quiz();
       // emp.id = createEmployeeRequest.id
       obj.questionText = data.questionText
       obj.answerOptions = obj.answerOptions
       obj.adminId = obj.adminId

        //console.log("name",emp.name)
        await this.repo.save(obj)

        const DTO = this.entityToDTO(obj)

        return DTO
    }

    private entityToDTO(emp : Quiz): quizDTO{

        const empdto = new quizDTO();
        empdto.questionText = emp.questionText
        empdto.answerOptions = emp.answerOptions
        empdto.adminId = emp.adminId
        return empdto
    }
}
