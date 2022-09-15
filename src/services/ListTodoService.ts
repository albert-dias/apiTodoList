import { Repository } from "typeorm";
import dataSource from "../database";
import { Todo } from "../entities/Todo";

interface IRequest{
    user_id: number;
}


class ListTodoService {
    private todosRepository: Repository<Todo>;

    constructor(){
        this.todosRepository = dataSource.getRepository(Todo);
    }

    public async execute({user_id}: IRequest): Promise<Todo[]>{

        const todo = await this.todosRepository.find({
            where: {
                user_id
            },
            relations: ["category"]
        })

        return todo;
    }
}

export { ListTodoService }