import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";

export const RequiredQuery = createParamDecorator((key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.query[key] == null) {
        throw new BadRequestException(`query param ${key} is required`);
    }
    return request.query[key];
});
