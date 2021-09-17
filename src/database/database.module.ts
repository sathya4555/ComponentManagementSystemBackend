import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { Client } from 'src/entity/client.entity';
import { Data } from 'src/entity/data.entity';
import { Draftdata } from 'src/entity/draftdata';
import { Videodata } from 'src/entity/videodata.entity';
import { watchhistory } from 'src/entity/watchhistory.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'cms',
            entities: [Admin,Data,Client,watchhistory,Draftdata,Videodata],
            synchronize: true,
        }),
    ]
})
export class DatabaseModule {}
