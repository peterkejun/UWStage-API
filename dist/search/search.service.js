"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("../company/company.service");
const jobs_service_1 = require("../jobs/jobs.service");
const typeorm_1 = require("typeorm");
let SearchService = class SearchService {
    constructor(dataSource, companyService, jobsService) {
        this.dataSource = dataSource;
        this.companyService = companyService;
        this.jobsService = jobsService;
    }
    async search(query) {
        const companies = await this.companyService.findBy({
            name: (0, typeorm_1.Like)(`%${query}%`),
        });
        const jobs = await this.jobsService.findBy({
            title: (0, typeorm_1.Like)(`%${query}%`),
        });
        return {
            companies,
            jobs,
        };
    }
};
SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        company_service_1.CompanyService,
        jobs_service_1.JobsService])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map