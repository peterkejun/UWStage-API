import { MigrationInterface, QueryRunner } from "typeorm";

export class TermsJobsRelation1664326225876 implements MigrationInterface {
    name = 'TermsJobsRelation1664326225876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`jobs_terms_terms\` (\`jobsId\` int NOT NULL, \`termsId\` int NOT NULL, INDEX \`IDX_7eff61526f65c101f1fec63e26\` (\`jobsId\`), INDEX \`IDX_2a9d0a04421fdb0c1612b00aec\` (\`termsId\`), PRIMARY KEY (\`jobsId\`, \`termsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`jobs_terms_terms\` ADD CONSTRAINT \`FK_7eff61526f65c101f1fec63e26b\` FOREIGN KEY (\`jobsId\`) REFERENCES \`jobs\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`jobs_terms_terms\` ADD CONSTRAINT \`FK_2a9d0a04421fdb0c1612b00aec1\` FOREIGN KEY (\`termsId\`) REFERENCES \`terms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs_terms_terms\` DROP FOREIGN KEY \`FK_2a9d0a04421fdb0c1612b00aec1\``);
        await queryRunner.query(`ALTER TABLE \`jobs_terms_terms\` DROP FOREIGN KEY \`FK_7eff61526f65c101f1fec63e26b\``);
        await queryRunner.query(`DROP INDEX \`IDX_2a9d0a04421fdb0c1612b00aec\` ON \`jobs_terms_terms\``);
        await queryRunner.query(`DROP INDEX \`IDX_7eff61526f65c101f1fec63e26\` ON \`jobs_terms_terms\``);
        await queryRunner.query(`DROP TABLE \`jobs_terms_terms\``);
    }

}
