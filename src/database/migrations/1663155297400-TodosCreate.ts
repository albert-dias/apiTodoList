import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TodosCreate1663155297400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "todos",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {   
                    name: "status",
                    type: "integer"
                },
                {
                    name: "user_id",
                    type: "integer"
                },
                {
                    name: "category_id",
                    type: "integer"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
                {
                    name: "FKUser_Todo",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_id"],
                    onDelete: "SET NULL",
                    onUpdate: "CASCADE"
                },
                {
                    name: "FKCategory_Todo",
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"],
                    columnNames: ["category_id"],
                    onDelete: "SET NULL",
                    onUpdate: "CASCADE"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("todos")
    }

}
