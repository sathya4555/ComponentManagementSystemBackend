import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { Client } from 'src/entity/client.entity';
import { Data } from 'src/entity/data.entity';
import { Draftdata } from 'src/entity/draftdata';
import { watchhistory } from 'src/entity/watchhistory.entity';
import { ComponentController } from './component.controller';
import { ComponentService } from './component.service';

@Module({
  controllers: [ComponentController],
  providers: [ComponentService],
  imports: [TypeOrmModule.forFeature([Admin,Data,Client,watchhistory,Draftdata]),
  JwtModule.register({
    secret: 'secret',
    signOptions:{expiresIn: '2d'}
  })



],
  
})
export class ComponentModule {}
