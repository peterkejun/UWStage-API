import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AME1664248002783 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
