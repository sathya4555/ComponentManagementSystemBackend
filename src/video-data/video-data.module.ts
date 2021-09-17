import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Videodata } from 'src/entity/videodata.entity';
import { VideoDataController } from './video-data.controller';
import { VideoDataService } from './video-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([Videodata])],
  controllers: [VideoDataController],
  providers: [VideoDataService]
})
export class VideoDataModule {}
