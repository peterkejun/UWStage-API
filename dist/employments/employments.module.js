"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employments_entity_1 = require("./employments.entity");
const employments_service_1 = require("./employments.service");
const employments_controller_1 = require("./employments.controller");
const users_service_1 = require("../users/users.service");
const jobs_service_1 = require("../jobs/jobs.service");
const terms_service_1 = require("../terms/terms.service");
const users_entity_1 = require("../users/users.entity");
const jobs_entity_1 = require("../jobs/jobs.entity");
const terms_entity_1 = require("../terms/terms.entity");
const posts_entity_1 = require("../posts/posts.entity");
const posts_module_1 = require("../posts/posts.module");
const posts_service_1 = require("../posts/posts.service");
let EmploymentsModule = class EmploymentsModule {
};
EmploymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([employments_entity_1.Employments, users_entity_1.Users, jobs_entity_1.Jobs, terms_entity_1.Terms, posts_entity_1.Posts]), posts_module_1.PostsModule],
        providers: [employments_service_1.EmploymentsService, users_service_1.UsersService, jobs_service_1.JobsService, terms_service_1.TermsService, posts_service_1.PostsService],
        controllers: [employments_controller_1.EmploymentsController],
        exports: [employments_service_1.EmploymentsService],
    })
], EmploymentsModule);
exports.EmploymentsModule = EmploymentsModule;
//# sourceMappingURL=employments.module.js.map