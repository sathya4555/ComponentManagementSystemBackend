import { Body, Controller, Post } from '@nestjs/common';
import { quizDTO } from 'src/dto/quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private readonly service: QuizService
        ) {
              
         }
  
         @Post('add')
         public async createOne(@Body() data: quizDTO){
             const result = await this.service.add(data);
             return result


}
}
