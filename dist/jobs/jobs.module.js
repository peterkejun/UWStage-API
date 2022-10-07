"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const jobs_controller_1 = require("./jobs.controller");
const jobs_entity_1 = require("./jobs.entity");
const typeorm_1 = require("@nestjs/typeorm");
const employments_module_1 = require("../employments/employments.module");
const employments_service_1 = require("../employments/employments.service");
const employments_entity_1 = require("../employments/employments.entity");
const posts_entity_1 = require("../posts/posts.entity");
const posts_module_1 = require("../posts/posts.module");
const posts_service_1 = require("../posts/posts.service");
let JobsModule = class JobsModule {
};
JobsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([jobs_entity_1.Jobs, employments_entity_1.Employments, posts_entity_1.Posts]), employments_module_1.EmploymentsModule, posts_module_1.PostsModule],
        providers: [jobs_service_1.JobsService, employments_service_1.EmploymentsService, posts_service_1.PostsService],
        controllers: [jobs_controller_1.JobsController],
        exports: [jobs_service_1.JobsService],
    })
], JobsModule);
exports.JobsModule = JobsModule;
//# sourceMappingURL=jobs.module.js.map