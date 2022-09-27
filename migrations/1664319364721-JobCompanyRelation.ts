import { MigrationInterface, QueryRunner } from "typeorm";

export class JobCompanyRelation1664319364721 implements MigrationInterface {
    name = 'JobCompanyRelation1664319364721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`duration\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`country\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`companyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`title\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`level\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`level\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_6ce4483dc65ed9d2e171269d801\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_6ce4483dc65ed9d2e171269d801\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`level\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`level\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`country\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`duration\``);
    }

}
