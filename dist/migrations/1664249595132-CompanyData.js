"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyData1664249595132 = void 0;
class CompanyData1664249595132 {
    constructor() {
        this.name = 'CompanyData1664249595132';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`company\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`company\``);
    }
}
exports.CompanyData1664249595132 = CompanyData1664249595132;
//# sourceMappingURL=1664249595132-CompanyData.js.map