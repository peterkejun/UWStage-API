"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredQuery = void 0;
const common_1 = require("@nestjs/common");
exports.RequiredQuery = (0, common_1.createParamDecorator)((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.query[key] == null) {
        throw new common_1.BadRequestException(`query param ${key} is required`);
    }
    return request.query[key];
});
//# sourceMappingURL=required-query.decorator.js.map