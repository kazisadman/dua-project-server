class ResponseHandler<TData> {
  statusCode: number;
  data: TData;
  message: string;
  success: boolean;

  constructor(
    statusCode: number,
    data: TData,
    message: string,
    success: boolean
  ) {
    (this.statusCode = statusCode),
      (this.data = data),
      (this.message = message),
      (this.success = success);
  }
}

export default ResponseHandler;
