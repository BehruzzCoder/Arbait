import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

declare module 'express' {
    interface Request {
        user?: {
            id: number;
            role: string;
        };
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwt: JwtService,
        private readonly prisma: PrismaService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req: Request = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException({ message: 'Token not provided' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException({ message: 'Invalid Authorization header format' });
        }

        try {
            const payload = this.jwt.verify(token);
            req.user = payload;
            const session = await this.prisma.session.findFirst({
                where: {
                    user_id: payload.id,
                    token: token,
                },
            });

            if (!session) {
                throw new UnauthorizedException({
                    message: 'Token is not active or session has been deleted',
                });
            }

            return true;
        } catch (error) {
            throw new UnauthorizedException({ message: 'Invalid or expired token' });
        }
    }
}
