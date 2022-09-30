import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCreateUpdateDateInPosts1664381742623 implements MigrationInterface {
    name = 'AddCreateUpdateDateInPosts1664381742623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`updatedDate\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`createdDate\``);
    }

}
