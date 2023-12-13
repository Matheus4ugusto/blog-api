import { Request, Response, NextFunction } from "express";
import { HttpError } from "../exceptions/HttpError";
export const exceptionHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (typeof error === "undefined" || error === null) {
    next();
  }

  if (!(error instanceof HttpError)) {
    return response.status(500).json({
      message: "Ocorreu um erro desconhecido",
    });
  }

  return response.status(error.status).json({
    message: error.message,
    error: error.error,
  });
};
