import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Admin } from "./admin.entity";
import { Data } from "./data.entity";

@Entity('watchhistory')
export class watchhistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    vId: string;

    @Column({ nullable: true})
    Cid: number;

 
    @Column({ nullable: true})
    time: string;




}