import { Buffer } from 'node:buffer';
import { createHmac } from 'node:crypto';

export type UserInfo = {
  role: 'client' | 'trainer';
};

export function createJWT(userInfo: UserInfo): string | Buffer {
  const jwtHeader = {
    typ: 'JWT',
    alg: 'HS256',
  };

  const base64JwtHeader = Buffer.from(JSON.stringify(jwtHeader)).toString(
    'base64url'
  );

  const issuedAt = Date.now();
  const jwtPayload = {
    iss: 'stub-for-now-change-later-pls-be',
    sub: 'stub-for-now-change-later-pls-fe',
    aud: 'stub-for-now-change-later-pls-be',
    iat: issuedAt,
    exp: issuedAt + 15 * 60,
    name: 'test name',
    role: userInfo.role,
  };

  const base64JwtPayload = Buffer.from(JSON.stringify(jwtPayload)).toString(
    'base64url'
  );

  const jwtData = `${base64JwtHeader}.${base64JwtPayload}`;

  const base64JwtSignature = createHmac('sha256', process.env.JWT_HMAC_SECRET!)
    .update(jwtData)
    .digest('base64url');

  return `${jwtData}.${base64JwtSignature}`;
}
