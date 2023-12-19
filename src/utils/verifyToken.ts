import * as jwt from "jsonwebtoken";

interface PayloadJwt {
  iat: number;
  jti: string;
  sub: string;
  email: string;
  exp: number;
}

export const verifyToken = (token: string): PayloadJwt => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as PayloadJwt;
};
