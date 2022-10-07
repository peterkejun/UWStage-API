"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const getDatabasePort = () => {
    if (process.env.DB_PORT != null) {
        return parseInt(process.env.DB_PORT);
    }
    return 3306;
};
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: getDatabasePort(),
    username: process.env.DB_USER || 'uwstage',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'uwstage',
    synchronize: true,
    logging: true,
    entities: ['src/**/*.entity.ts'],
    subscribers: [],
    migrations: ['migrations/*.ts'],
});
//# sourceMappingURL=data-source.js.map