import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { User } from "../entities/User";
import { CreateUser1662380904306 } from "./migrations/1662380904306-CreateUser";
import { CreateCategories1662639398292 } from "./migrations/1662639398292-CreateCategories";
import { TodosCreate1663155297400 } from "./migrations/1663155297400-TodosCreate";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "tododb",
    entities: [
        User,
        Category,
    ],
    migrations: [
        CreateUser1662380904306,
        CreateCategories1662639398292,
        TodosCreate1663155297400,
    ],
});

dataSource.initialize();

export default dataSource;