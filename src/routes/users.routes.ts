import { Router } from "express";


import { UsersController } from "../controllers/UsersController";

const usersController = new UsersController();

export const usersRouter = Router();

usersRouter.post("/", usersController.create);