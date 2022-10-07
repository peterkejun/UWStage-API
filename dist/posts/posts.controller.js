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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const employments_service_1 = require("../employments/employments.service");
const http_response_1 = require("../utils/http-response");
const required_query_decorator_1 = require("../utils/nest-decorators.ts/required-query.decorator");
const posts_entity_1 = require("./posts.entity");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postsService, employmentsService) {
        this.postsService = postsService;
        this.employmentsService = employmentsService;
    }
    async findAll(job, term) {
        return await this.postsService.findAll(job, term);
    }
    async createOne(employment, post) {
        const employmentEntity = await this.employmentsService.findOne(employment);
        if (employmentEntity == null) {
            throw (0, http_response_1.makeHttpException)(common_1.HttpStatus.BAD_REQUEST, 'employment not found');
        }
        return await this.postsService.createOne(post, employmentEntity);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('job', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('term', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, required_query_decorator_1.RequiredQuery)('employment', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, posts_entity_1.Posts]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createOne", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        employments_service_1.EmploymentsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map