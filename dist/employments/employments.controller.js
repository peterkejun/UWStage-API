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
exports.EmploymentsController = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("../jobs/jobs.service");
const terms_service_1 = require("../terms/terms.service");
const users_service_1 = require("../users/users.service");
const http_response_1 = require("../utils/http-response");
const required_query_decorator_1 = require("../utils/nest-decorators.ts/required-query.decorator");
const employments_entity_1 = require("./employments.entity");
const employments_service_1 = require("./employments.service");
let EmploymentsController = class EmploymentsController {
    constructor(employmentsService, usersService, jobsService, termsService) {
        this.employmentsService = employmentsService;
        this.usersService = usersService;
        this.jobsService = jobsService;
        this.termsService = termsService;
    }
    async createOne(user, job, term, employment) {
        const userEntity = await (0, http_response_1.throwIfNullish)(this.usersService.findOneById(user), (0, http_response_1.makeHttpException)(common_1.HttpStatus.NOT_FOUND, (0, http_response_1.makeNotFoundMsg)('user')));
        const jobEntity = await (0, http_response_1.throwIfNullish)(this.jobsService.findOne(job), (0, http_response_1.makeHttpException)(common_1.HttpStatus.NOT_FOUND, (0, http_response_1.makeNotFoundMsg)('job')));
        const termEntity = await (0, http_response_1.throwIfNullish)(this.termsService.findOne(term), (0, http_response_1.makeHttpException)(common_1.HttpStatus.NOT_FOUND, (0, http_response_1.makeNotFoundMsg)('term')));
        return await this.employmentsService.createOne(employment, userEntity, jobEntity, termEntity);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, required_query_decorator_1.RequiredQuery)('user')),
    __param(1, (0, required_query_decorator_1.RequiredQuery)('job')),
    __param(2, (0, required_query_decorator_1.RequiredQuery)('term')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, employments_entity_1.Employments]),
    __metadata("design:returntype", Promise)
], EmploymentsController.prototype, "createOne", null);
EmploymentsController = __decorate([
    (0, common_1.Controller)('employments'),
    __metadata("design:paramtypes", [employments_service_1.EmploymentsService,
        users_service_1.UsersService,
        jobs_service_1.JobsService,
        terms_service_1.TermsService])
], EmploymentsController);
exports.EmploymentsController = EmploymentsController;
//# sourceMappingURL=employments.controller.js.map