import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    login(req: any): Promise<{
        access_token: string;
        user: import("./users/users.entity").Users;
    }>;
}
