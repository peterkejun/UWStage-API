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
exports.Employments = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const terms_entity_1 = require("../terms/terms.entity");
const jobs_entity_1 = require("../jobs/jobs.entity");
const posts_entity_1 = require("../posts/posts.entity");
let Employments = class Employments {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Employments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Employments.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Employments.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Employments.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Employments.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.employments),
    __metadata("design:type", users_entity_1.Users)
], Employments.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jobs_entity_1.Jobs, (job) => job.employments),
    __metadata("design:type", jobs_entity_1.Jobs)
], Employments.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => terms_entity_1.Terms, (term) => term.employments),
    __metadata("design:type", terms_entity_1.Terms)
], Employments.prototype, "term", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => posts_entity_1.Posts, post => post.employment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", posts_entity_1.Posts)
], Employments.prototype, "post", void 0);
Employments = __decorate([
    (0, typeorm_1.Entity)()
], Employments);
exports.Employments = Employments;
//# sourceMappingURL=employments.entity.js.map