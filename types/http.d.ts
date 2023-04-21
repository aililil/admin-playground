export type HttpMethods = "get" | "post" | "patch" | 'delete';

interface BasicResponse<T> {
  code: string;
  data: T;
  msg: string;
};

export type RequestDefalultConfig = {
  method: HttpMethods;
  path: string;
  preCallback: Function;
  postCallback: Function;
  throttle: number;
  headers: { [key: string]: string };
  timeout?: number,
  baseURL?: string,
};

export type RequestConfig = Partial<requestDefalultConfig>;
