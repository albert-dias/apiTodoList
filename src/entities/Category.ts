import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("categories")
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    color: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}