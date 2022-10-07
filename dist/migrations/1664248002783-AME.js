"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AME1664248002783 = void 0;
class AME1664248002783 {
    constructor() {
        this.name = 'AME1664248002783';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`company\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`company\``);
    }
}
exports.AME1664248002783 = AME1664248002783;
//# sourceMappingURL=1664248002783-AME.js.map