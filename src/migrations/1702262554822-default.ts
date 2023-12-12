import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1702262554822 implements MigrationInterface {
    name = 'Default1702262554822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "date" TIMESTAMP NOT NULL`);
    }

}
