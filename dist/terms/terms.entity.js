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
exports.Terms = void 0;
const jobs_entity_1 = require("../jobs/jobs.entity");
const typeorm_1 = require("typeorm");
const employments_entity_1 = require("../employments/employments.entity");
let Terms = class Terms {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Terms.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Terms.prototype, "season", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 4 }),
    __metadata("design:type", String)
], Terms.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => jobs_entity_1.Jobs, (job) => job.terms),
    __metadata("design:type", Array)
], Terms.prototype, "jobs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employments_entity_1.Employments, employment => employment.term),
    __metadata("design:type", Array)
], Terms.prototype, "employments", void 0);
Terms = __decorate([
    (0, typeorm_1.Entity)()
], Terms);
exports.Terms = Terms;
//# sourceMappingURL=terms.entity.js.map