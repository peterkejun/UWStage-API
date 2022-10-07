"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AME1664246796859 = void 0;
class AME1664246796859 {
    constructor() {
        this.name = 'AME1664246796859';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`company\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`company\``);
    }
}
exports.AME1664246796859 = AME1664246796859;
//# sourceMappingURL=1664246796859-AME.js.map