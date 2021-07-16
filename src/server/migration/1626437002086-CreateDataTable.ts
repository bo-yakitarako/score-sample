import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDataTable1626437002086 implements MigrationInterface {
    name = 'CreateDataTable1626437002086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "data" ("dataId" SERIAL NOT NULL, "userName" character varying(256) NOT NULL, "score" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_190425a6265c9926379c7e377d2" PRIMARY KEY ("dataId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "data"`);
    }

}
