import { MigrationInterface, QueryRunner } from "typeorm";

export class TermData1664325864642 implements MigrationInterface {
    name = 'TermData1664325864642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`terms\` (\`id\` int NOT NULL AUTO_INCREMENT, \`season\` varchar(10) NOT NULL, \`year\` varchar(4) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`terms\``);
    }

}
