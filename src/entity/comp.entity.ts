import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Client } from "./client.entity";

@Entity('comp')
export class Comp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    adminid: number;


}