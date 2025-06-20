import { Buffer } from 'node:buffer';
import { createHmac } from 'node:crypto';

export type SafeUserInfo = {
  id: string;
  name: string;
  surname: string;
  isTrainer: boolean;
};

// eslint-disable-next-line jsdoc/require-jsdoc
export function createJWT({ id, ...userInfo }: SafeUserInfo): string | Buffer {
  const jwtHeader = {
    typ: 'JWT',
    alg: 'HS256',
  };

  const base64JwtHeader = Buffer.from(JSON.stringify(jwtHeader)).toString(
    'base64url'
  );

  const issuedAt = Date.now();
  const jwtPayload = {
    sub: id,
    iat: issuedAt,
    exp: issuedAt + 15 * 60 * 1000,
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
