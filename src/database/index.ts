import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { CreateUser1662380904306 } from "./migrations/1662380904306-CreateUser";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "tododb",
    entities: [
        User,
    ],
    migrations: [
        CreateUser1662380904306,
    ],
});

dataSource.initialize();

export default dataSource;