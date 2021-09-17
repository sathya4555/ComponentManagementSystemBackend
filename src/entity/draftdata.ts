import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Admin } from "./admin.entity";
import { Data } from "./data.entity";

@Entity('draftdata')
export class Draftdata {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true})
    data: string;

    @Column({ nullable: true})
    adminid: number;


}