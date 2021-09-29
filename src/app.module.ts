import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentModule } from './component/component.module';
import { DatabaseModule } from './database/database.module';
import { VideoDataModule } from './video-data/video-data.module';
import { QuizModule } from './quiz/quiz.module';
import { DraftModule } from './draft/draft.module';
import { CompModule } from './comp/comp.module';

@Module({
  imports: [ComponentModule, DatabaseModule, VideoDataModule, QuizModule, DraftModule, CompModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
