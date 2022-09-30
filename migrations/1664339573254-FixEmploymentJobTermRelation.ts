import { MigrationInterface, QueryRunner } from "typeorm";

export class FixEmploymentJobTermRelation1664339573254 implements MigrationInterface {
    name = 'FixEmploymentJobTermRelation1664339573254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_d121e5b2aa08eb82e8bdd3c8b1c\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`employmentId\``);
        await queryRunner.query(`ALTER TABLE \`employments\` ADD \`termId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employments\` ADD CONSTRAINT \`FK_cc6ae42af0598af0ba7154a0a1b\` FOREIGN KEY (\`termId\`) REFERENCES \`terms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employments\` DROP FOREIGN KEY \`FK_cc6ae42af0598af0ba7154a0a1b\``);
        await queryRunner.query(`ALTER TABLE \`employments\` DROP COLUMN \`termId\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`employmentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_d121e5b2aa08eb82e8bdd3c8b1c\` FOREIGN KEY (\`employmentId\`) REFERENCES \`employments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
