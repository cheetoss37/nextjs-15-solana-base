export interface BaseResponseData<T> {
  statusCode: number;
  message?: string;
  error?: string;
  data: T;
}

export interface ApiResponseInterface {
  status: number;
  data: object;
}
