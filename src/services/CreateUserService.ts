import { Repository } from "typeorm";
import dataSource from "../database";
import { User } from "../entities/User";
import { hash } from "bcryptjs";

interface IUser {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = dataSource.getRepository(User);
    }

    public async execute({
        name,
        email,
        password
    }: IUser): Promise<User>{
        if(!name || !email || !password) {
            throw new Error("Dados incompletos");
        }

        const hashedPassword = await hash(password, 8);

        const user = this.usersRepository.create({
            name, 
            email, 
            password: hashedPassword,
            is_active: 1,
        });

        await this.usersRepository.save(user)

        return user;
    }
}

export { CreateUserService }