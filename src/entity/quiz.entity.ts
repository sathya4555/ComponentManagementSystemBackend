import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Admin } from "./admin.entity";
import { Data } from "./data.entity";

@Entity('quiz')
export class Quiz {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true})
    questionText: string;

    // @Column({ nullable: true})
    // answerOptions: JSON;

    @Column ({ name: "answerOptions", nullable: true , type: "json"})
    answerOptions?: JSON;

    
    @Column({ nullable: true})
    adminId: number;

}