import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1604676845544 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'senha',
                    type: 'varchar',
                    isNullable: false
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
