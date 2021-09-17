import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Client } from "./client.entity";

@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;


    @OneToMany(() => Client,client=>client.id)
    client:Client
  
}