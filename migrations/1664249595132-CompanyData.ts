import { MigrationInterface, QueryRunner } from "typeorm";

export class CompanyData1664249595132 implements MigrationInterface {
    name = 'CompanyData1664249595132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`company\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`company\``);
    }

}
