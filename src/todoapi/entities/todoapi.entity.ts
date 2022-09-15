import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Todoapi {

@PrimaryGeneratedColumn()
id : number;

@Column()
name : string

@Column()
email : string

@Column()
address : string

@Column({default : true})
isActive : boolean

}
