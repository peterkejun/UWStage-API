import { MigrationInterface, QueryRunner } from "typeorm";

export class FixPostEmploymentRelation1664341082532 implements MigrationInterface {
    name = 'FixPostEmploymentRelation1664341082532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employments\` ADD \`postId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employments\` ADD UNIQUE INDEX \`IDX_d0a0492130fc8da0d479c14474\` (\`postId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_d0a0492130fc8da0d479c14474\` ON \`employments\` (\`postId\`)`);
        await queryRunner.query(`ALTER TABLE \`employments\` ADD CONSTRAINT \`FK_d0a0492130fc8da0d479c144740\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employments\` DROP FOREIGN KEY \`FK_d0a0492130fc8da0d479c144740\``);
        await queryRunner.query(`DROP INDEX \`REL_d0a0492130fc8da0d479c14474\` ON \`employments\``);
        await queryRunner.query(`ALTER TABLE \`employments\` DROP INDEX \`IDX_d0a0492130fc8da0d479c14474\``);
        await queryRunner.query(`ALTER TABLE \`employments\` DROP COLUMN \`postId\``);
    }

}
