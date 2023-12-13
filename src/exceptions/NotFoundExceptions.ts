import { HttpError } from "./HttpError";

export class NotFoundException extends HttpError {
  constructor(message: string) {
    super(message, 404);
  }
}
