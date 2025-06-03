import { Buffer } from 'node:buffer';
import { createHmac } from 'node:crypto';

export type SafeUserInfo = {
  id: string;
  name: string;
  surname: string;
  role: 'client' | 'trainer';
};

// eslint-disable-next-line jsdoc/require-jsdoc
export function createJWT(userInfo: SafeUserInfo): string | Buffer {
  const jwtHeader = {
    typ: 'JWT',
    alg: 'HS256',
  };

  const base64JwtHeader = Buffer.from(JSON.stringify(jwtHeader)).toString(
    'base64url'
  );

  const issuedAt = Date.now();
  const jwtPayload = {
    iat: issuedAt,
    exp: issuedAt + 15 * 60,
    ...userInfo,
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
