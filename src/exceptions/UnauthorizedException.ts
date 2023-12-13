import { HttpError } from "./HttpError";

export class UnauthorizedException extends HttpError {
  constructor(message: string) {
    super(message, 401);
  }
}
