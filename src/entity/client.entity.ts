import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Admin } from "./admin.entity";
import { Data } from "./data.entity";

@Entity('client')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    name: string;

    @Column({ nullable: true})
    password: string;

 
    @ManyToOne(() => Admin, admin => admin.id,{onDelete: 'SET NULL'})
    admin:Admin

    // @OneToMany(() => Data,data=>data.videoid)
    // video:Data

    
    @ManyToOne(() => Data, data => data.videoid,{onDelete: 'SET NULL'})
    video:Data


}