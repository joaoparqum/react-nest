import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    email: string;
}