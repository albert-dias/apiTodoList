import { Repository } from "typeorm";
import dataSource from "../database";
import { Category } from "../entities/Category";
import { Todo } from "../entities/Todo";

interface IRequest {
    name: string;
    description: string;
    user_id: number;
    category_id: number;
}

class CreateTodoService {
    private todosRepository: Repository<Todo>;
    private cateoriesRepository: Repository<Category>;

    constructor(){
        this.todosRepository = dataSource.getRepository(Todo);
        this.cateoriesRepository = dataSource.getRepository(Category);
    }

    public async execute({
        name,
        description,
        user_id,
        category_id,
    }: IRequest): Promise<Todo>{
        if(!name  || !description || !user_id || !category_id) {
            throw new Error("Dados incompletos");
        }

        const categoryExists = await this.cateoriesRepository.findOne({where:{id: category_id}});

        if(!categoryExists){
            throw new Error("Categoria inexistente");
        }


        const todo = this.todosRepository.create({
            name, 
            description,
            user_id,
            category_id,
            status: 0,
        });

        await this.todosRepository.save(todo)

        return todo;
    }
}

export { CreateTodoService }