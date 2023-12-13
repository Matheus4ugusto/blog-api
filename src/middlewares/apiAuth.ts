import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/UnauthorizedException";
import { UserService } from "./../services/UserService";

export const apiAuth = async (
  request: any,
  response: Response,
  next: NextFunction
) => {
  const authorizarion = request.headers.authorization;
  if (authorizarion == null || !authorizarion.startsWith("Bearer")) {
    next(new UnauthorizedException("Acesso não autorizado"));
  }
  const token = authorizarion?.split(" ")[1];

  try {
    const userService: UserService = new UserService();
    const { email } = userService.verifyToken(token as string);
    const user = userService.getUserByEmail(email);
    request.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
