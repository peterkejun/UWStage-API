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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employments_service_1 = require("../employments/employments.service");
const posts_service_1 = require("../posts/posts.service");
const typeorm_2 = require("typeorm");
const jobs_entity_1 = require("./jobs.entity");
let JobsService = class JobsService {
    constructor(JobsRepository, employmentsService, postService, dataSource) {
        this.JobsRepository = JobsRepository;
        this.employmentsService = employmentsService;
        this.postService = postService;
        this.dataSource = dataSource;
    }
    async findAll(companyId = null) {
        let query = this.JobsRepository.createQueryBuilder('jobs');
        if (companyId) {
            query = query.where('jobs.company = :companyId', { companyId });
        }
        return await query.getMany();
    }
    async findOne(id) {
        const job = await this.JobsRepository.findOneBy({ id });
        if (!job)
            return null;
        return Object.assign(Object.assign({}, job), { employment_count: await this.employmentsService.count(job), posts_count: await this.postService.countByJob(job), rating: await this.employmentsService.calculateAverageRating(job) });
    }
    findBy(options) {
        return this.JobsRepository.findBy(options);
    }
    async remove(id) {
        await this.JobsRepository.delete(id);
    }
    async createOne(Jobs) {
        return await this.JobsRepository.save(Jobs);
    }
    updateOne(id, job) {
        return new Promise((resolve, reject) => {
            this.dataSource.transaction(async (manager) => {
                const existingJobs = await manager.findOne(jobs_entity_1.Jobs, {
                    where: { id },
                });
                if (existingJobs == null) {
                    reject({
                        code: 400,
                        msg: `Jobs with id ${id} not found.`,
                    });
                }
                resolve(await manager.update(jobs_entity_1.Jobs, { id }, job));
            });
        });
    }
};
JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(jobs_entity_1.Jobs)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        employments_service_1.EmploymentsService,
        posts_service_1.PostsService,
        typeorm_2.DataSource])
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map