import { EntityTarget } from "typeorm";
export declare type EntityExistsFactoryData = [EntityTarget<any>, number];
export declare const EntityExists: (...dataOrPipes: (EntityExistsFactoryData | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
