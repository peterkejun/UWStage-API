"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityExists = void 0;
const common_1 = require("@nestjs/common");
exports.EntityExists = (0, common_1.createParamDecorator)((data, input) => {
    console.log(data, input);
    return data[1];
});
//# sourceMappingURL=entity-exists.decorator.js.map