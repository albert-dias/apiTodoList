import { Repository } from "typeorm";
import dataSource from "../database";
import { Category } from "../entities/Category";
import { Todo } from "../entities/Todo";

interface IRequest {
    id: number;
    user_id: number;
}

class ShowTodoService {
    private todosRepository: Repository<Todo>;

    constructor(){
        this.todosRepository = dataSource.getRepository(Todo);
    }

    public async execute({
        user_id,
        id,
    }: IRequest): Promise<Todo>{
        if(!user_id || !id) {
            throw new Error("Dados incompletos");
        }



        const todo = await this.todosRepository.findOne({
            where: {id},
            relations:['category', 'user']
        });

        delete todo.user.password

        return todo;
    }
}

export { ShowTodoService }