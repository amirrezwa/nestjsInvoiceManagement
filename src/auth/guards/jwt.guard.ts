import { ExecutionContext, Injectable, mixin, Type } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from '../strategies/jwt.strategy';

export function extractJwtPayload(token: string): Record<string, any> | null {
  try {
    // Split the token into its parts (Header, Payload, Signature)
    const [, payload] = token.split('.');

    if (!payload) {
      throw new Error('Invalid JWT format');
    }

    // Decode the Base64Url-encoded payload
    const decodedPayload = Buffer.from(payload, 'base64').toString('utf-8');

    // Parse and return the payload as an object
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error('Failed to extract JWT payload:', error.message);
    return null;
  }
}

export function JwtAuthGuard(grantedRoles: string[] = []): Type {
  @Injectable()
  class JwtAuthGuardWithParam extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = request.headers['authorization'] ?? '';
      const jwtPayload = extractJwtPayload(token) as { roles: string[] };
      const isValid = new JwtStrategy().validate(jwtPayload);
      if (!isValid) {
        return false;
      }
      const { roles = [] }: { roles: string[] } = jwtPayload ?? { roles: [] };
      return (
        grantedRoles.length === 0 || roles.some((x) => grantedRoles.includes(x))
      );
    }
  }

  return mixin(JwtAuthGuardWithParam); // Return the dynamically created guard
}
