import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class UsersController {
    async create( request: Request, response: Response ): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({name, email, password});
            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}