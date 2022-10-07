"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const company_module_1 = require("./company/company.module");
const jobs_module_1 = require("./jobs/jobs.module");
const terms_module_1 = require("./terms/terms.module");
const employments_module_1 = require("./employments/employments.module");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const auth_module_1 = require("./auth/auth.module");
const auth_service_1 = require("./auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const search_service_1 = require("./search/search.service");
const search_controller_1 = require("./search/search.controller");
const search_module_1 = require("./search/search.module");
const shouldOrmSynchronize = () => {
    return process.env.TARGET == 'DEV';
};
const getDatabasePort = () => {
    if (process.env.DB_PORT != null) {
        return parseInt(process.env.DB_PORT);
    }
    return 3306;
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: getDatabasePort(),
                username: process.env.DB_USER || 'uwstage',
                password: process.env.DB_PASSWORD || 'password',
                database: process.env.DB_DATABASE || 'uwstage',
                entities: [],
                migrations: [],
                autoLoadEntities: true,
                synchronize: shouldOrmSynchronize(),
            }),
            company_module_1.CompanyModule,
            jobs_module_1.JobsModule,
            terms_module_1.TermsModule,
            employments_module_1.EmploymentsModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            search_module_1.SearchModule,
        ],
        controllers: [app_controller_1.AppController, search_controller_1.SearchController],
        providers: [app_service_1.AppService, auth_service_1.AuthService, jwt_1.JwtService, search_service_1.SearchService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map