"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("../company/company.entity");
const company_module_1 = require("../company/company.module");
const company_service_1 = require("../company/company.service");
const employments_entity_1 = require("../employments/employments.entity");
const employments_module_1 = require("../employments/employments.module");
const employments_service_1 = require("../employments/employments.service");
const jobs_entity_1 = require("../jobs/jobs.entity");
const jobs_module_1 = require("../jobs/jobs.module");
const jobs_service_1 = require("../jobs/jobs.service");
const posts_module_1 = require("../posts/posts.module");
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [company_module_1.CompanyModule, jobs_module_1.JobsModule, typeorm_1.TypeOrmModule.forFeature([company_entity_1.Company, jobs_entity_1.Jobs, employments_entity_1.Employments]), employments_module_1.EmploymentsModule, posts_module_1.PostsModule],
        providers: [company_service_1.CompanyService, jobs_service_1.JobsService, employments_service_1.EmploymentsService],
    })
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map