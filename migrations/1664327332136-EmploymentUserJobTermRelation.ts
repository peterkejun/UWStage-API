import { MigrationInterface, QueryRunner } from "typeorm";

export class EmploymentUserJobTermRelation1664327332136 implements MigrationInterface {
    name = 'EmploymentUserJobTermRelation1664327332136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(100) NOT NULL, \`lastName\` varchar(100) NOT NULL, \`program\` varchar(50) NOT NULL, \`email\` varchar(500) NOT NULL, \`password\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(100) NOT NULL, \`level\` varchar(20) NOT NULL, \`duration\` int NOT NULL, \`country\` varchar(50) NOT NULL, \`userId\` int NULL, \`jobId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employments_terms_terms\` (\`employmentsId\` int NOT NULL, \`termsId\` int NOT NULL, INDEX \`IDX_13374d12da1d4431ba9253175a\` (\`employmentsId\`), INDEX \`IDX_0e7b33e962f8222a784a9fdc51\` (\`termsId\`), PRIMARY KEY (\`employmentsId\`, \`termsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employments\` ADD CONSTRAINT \`FK_d968659c1dfdfce13ea4177b293\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employments\` ADD CONSTRAINT \`FK_0530f0e7915a439b5c104654055\` FOREIGN KEY (\`jobId\`) REFERENCES \`jobs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employments_terms_terms\` ADD CONSTRAINT \`FK_13374d12da1d4431ba9253175af\` FOREIGN KEY (\`employmentsId\`) REFERENCES \`employments\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`employments_terms_terms\` ADD CONSTRAINT \`FK_0e7b33e962f8222a784a9fdc516\` FOREIGN KEY (\`termsId\`) REFERENCES \`terms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employments_terms_terms\` DROP FOREIGN KEY \`FK_0e7b33e962f8222a784a9fdc516\``);
        await queryRunner.query(`ALTER TABLE \`employments_terms_terms\` DROP FOREIGN KEY \`FK_13374d12da1d4431ba9253175af\``);
        await queryRunner.query(`ALTER TABLE \`employments\` DROP FOREIGN KEY \`FK_0530f0e7915a439b5c104654055\``);
        await queryRunner.query(`ALTER TABLE \`employments\` DROP FOREIGN KEY \`FK_d968659c1dfdfce13ea4177b293\``);
        await queryRunner.query(`DROP INDEX \`IDX_0e7b33e962f8222a784a9fdc51\` ON \`employments_terms_terms\``);
        await queryRunner.query(`DROP INDEX \`IDX_13374d12da1d4431ba9253175a\` ON \`employments_terms_terms\``);
        await queryRunner.query(`DROP TABLE \`employments_terms_terms\``);
        await queryRunner.query(`DROP TABLE \`employments\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
