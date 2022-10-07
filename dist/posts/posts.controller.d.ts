import { EmploymentsService } from 'src/employments/employments.service';
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    private readonly employmentsService;
    constructor(postsService: PostsService, employmentsService: EmploymentsService);
    findAll(job: number, term: number): Promise<Posts[]>;
    createOne(employment: number, post: Posts): Promise<Posts>;
}
