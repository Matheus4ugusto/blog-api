import { HttpError } from "./HttpError";

export class ForbiddenException extends HttpError {
  constructor(message: string) {
    super(message, 403);
  }
}
