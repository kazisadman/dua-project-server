class ErrorHandler extends Error {
  statusCode: number;
  success: boolean;
  errors: any[];

  constructor(
    statusCode: number,
    message: "Something went wrong",
    success: boolean,
    errors: any[]
  ) {
    super(message);
    this.statusCode = statusCode;
    this.success = success;
    this.errors = errors;
  }
}

export default ErrorHandler;
