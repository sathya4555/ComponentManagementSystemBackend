import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Draftdata } from 'src/entity/draftdata';
import { DraftController } from './draft.controller';
import { DraftService } from './draft.service';

@Module({
  imports: [TypeOrmModule.forFeature([Draftdata])],
  controllers: [DraftController],
  providers: [DraftService]
})
export class DraftModule {}
