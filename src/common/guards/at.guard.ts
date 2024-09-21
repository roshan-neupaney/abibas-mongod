import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AtGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Check if the route is public
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // If the route is public, check if a token is present
      const token = context.switchToHttp().getRequest().headers.authorization;
      if (token === undefined) {
        // If no token, allow access
        return true;
      } else {
        // If token is present, proceed with JWT authentication
        return super.canActivate(context);
      }
    }

    // For non-public routes, enforce JWT authentication
    return super.canActivate(context);
  }
}
