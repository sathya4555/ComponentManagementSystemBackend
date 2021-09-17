import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Client } from "./client.entity";

@Entity('data')
export class Data {
    @PrimaryGeneratedColumn()
    videoid: number;

    @Column({ nullable: true})
    videoname: string;

    @Column({ nullable: true})
    timestamp: string;
    
    @Column({ nullable: true})
    watched: number;

    @Column({ nullable: true})
    adminid: number;

    
    @Column({ nullable: true})
    category: string;


   
    @OneToMany(() => Client,client=>client.id)
    client:Client
}