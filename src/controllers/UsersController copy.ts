import { Request, Response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';

export class CategoriesController {
    async create( request: Request, response: Response ): Promise<Response> {
        const { name, color } = request.body;

        try {
            const createCategoryService = new CreateCategoryService();
            const category = await createCategoryService.execute({name, color});
            return response.status(201).json(category);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}