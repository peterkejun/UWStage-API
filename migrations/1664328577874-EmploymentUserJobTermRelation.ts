import { MigrationInterface, QueryRunner } from "typeorm";

export class EmploymentUserJobTermRelation1664328577874 implements MigrationInterface {
    name = 'EmploymentUserJobTermRelation1664328577874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rating\` tinyint NOT NULL, \`subject\` varchar(500) NOT NULL, \`content\` text NOT NULL, \`employmentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_d121e5b2aa08eb82e8bdd3c8b1c\` FOREIGN KEY (\`employmentId\`) REFERENCES \`employments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_d121e5b2aa08eb82e8bdd3c8b1c\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
    }

}
