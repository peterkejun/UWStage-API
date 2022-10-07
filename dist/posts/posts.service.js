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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
let PostsService = class PostsService {
    constructor(PostsRepository, dataSource) {
        this.PostsRepository = PostsRepository;
        this.dataSource = dataSource;
    }
    async findAll(jobId = null, termId = null) {
        let query = this.PostsRepository.createQueryBuilder('posts')
            .leftJoin('posts.employment', 'employments');
        if (jobId) {
            query = query.where('employments.job = :jobId', { jobId });
        }
        if (termId) {
            query = query.where('employments.term = :termId', { termId });
        }
        query = query.select('posts.*');
        return await query.getMany();
    }
    findOne(id) {
        return this.PostsRepository.findOneBy({ id });
    }
    async countByJob(job) {
        const results = await this.dataSource.query(`select count(p.id) c from posts p join employments e on e.postId = p.id
      join jobs j on e.jobId = j.id
      where j.id = ?`, [job.id]);
        return parseInt(results[0].c);
    }
    async remove(id) {
        await this.PostsRepository.delete(id);
    }
    async createOne(post, employment) {
        post.employment = employment;
        return await this.PostsRepository.save(post);
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map