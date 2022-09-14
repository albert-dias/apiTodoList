import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Entity("todos")
export class Todo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    user_id: number;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User, user => user.id) 
    user: User;
    
    @Column()
    category_id: number;

    @JoinColumn({ name: "category_id" })
    @ManyToOne(() => Category, cat => cat.id) 
    category: Category;
    
    @Column()
    status: number;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}