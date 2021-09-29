import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comp } from 'src/entity/comp.entity';
import { Videodata } from 'src/entity/videodata.entity';
import { CompController } from './comp.controller';
import { CompService } from './comp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comp])],
  controllers: [CompController],
  providers: [CompService]
})
export class CompModule {}
