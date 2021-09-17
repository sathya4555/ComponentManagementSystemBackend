import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentModule } from './component/component.module';
import { DatabaseModule } from './database/database.module';
import { VideoDataModule } from './video-data/video-data.module';

@Module({
  imports: [ComponentModule, DatabaseModule, VideoDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
