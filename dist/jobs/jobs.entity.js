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
exports.Jobs = void 0;
const typeorm_1 = require("typeorm");
const terms_entity_1 = require("../terms/terms.entity");
const employments_entity_1 = require("../employments/employments.entity");
const company_entity_1 = require("../company/company.entity");
let Jobs = class Jobs {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Jobs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Jobs.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Jobs.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Jobs.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Jobs.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.jobs),
    __metadata("design:type", company_entity_1.Company)
], Jobs.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => terms_entity_1.Terms, (term) => term.jobs),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Jobs.prototype, "terms", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employments_entity_1.Employments, (employment) => employment.job),
    __metadata("design:type", Array)
], Jobs.prototype, "employments", void 0);
Jobs = __decorate([
    (0, typeorm_1.Entity)()
], Jobs);
exports.Jobs = Jobs;
//# sourceMappingURL=jobs.entity.js.map