export abstract class HttpError extends Error {
  public status: number;
  public error?: any;

  constructor(message: string, status: number, error?: any) {
    super(message);
    this.status = status;
    this.error = error;
  }
}
