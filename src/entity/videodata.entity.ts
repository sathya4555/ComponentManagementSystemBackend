import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Admin } from "./admin.entity";
import { Data } from "./data.entity";

@Entity('videodata')
export class Videodata {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true})
    videoname: string;

    @Column({ nullable: true})
    desc: string;

    @Column({ nullable: true})
    mark: number;




}