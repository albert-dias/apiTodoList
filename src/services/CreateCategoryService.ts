import { Repository } from "typeorm";
import dataSource from "../database";
import { Category } from "../entities/Category";

interface IUser {
    name: string;
    color: string;
}

class CreateCategoryService {
    private catecoriesRepository: Repository<Category>;

    constructor(){
        this.catecoriesRepository = dataSource.getRepository(Category);
    }

    public async execute({
        name,
        color,
    }: IUser): Promise<Category>{
        if(!name  || !color) {
            throw new Error("Dados incompletos");
        }


        const user = this.catecoriesRepository.create({
            name, 
            color,
        });

        await this.catecoriesRepository.save(user)

        return user;
    }
}

export { CreateCategoryService }