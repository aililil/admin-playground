import type {
  BasicResponse,
  HttpMethods,
  RequestConfig,
  RequestDefalultConfig,
} from "#/http";
import { BASE_URL, SYSTEM_TIMEOUT } from "@/constants/setting";
import { PrimoseThrottle } from "@/utils/tools/index";
import axios from "axios";
import { stringify } from "qs";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: SYSTEM_TIMEOUT,
  headers: { "Content-Type": "application/json" },
});

const abortController = new AbortController();

axiosInstance.interceptors.request.use(
  (conf) => {
    conf.signal = abortController.signal;
    return conf;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (["200"].includes(res.data.code)) return res.data;
    return Promise.reject(res);
  },
  (err) => {
    return Promise.reject(err);
  }
);

const httpMethods: {
  [key in HttpMethods]: <T>(
    x: object,
    y: RequestDefalultConfig
  ) => Promise<BasicResponse<T>>;
} = {
  get(params, config) {
    const url = `${config.path}?${stringify(params)}`;
    return axiosInstance.get(url, config);
  },

  post(params, config) {
    return axiosInstance.post(config.path, params, config);
  },

  patch(params, config) {
    return axiosInstance.patch(config.path, params, config);
  },

  delete(params, config) {
    return axiosInstance.patch(config.path, params, config);
  },
};

const defaultConfig: RequestDefalultConfig = {
  method: "post",
  path: "",
  preCallback: () => {},
  postCallback: () => {},
  throttle: 0,
  headers: {},
};

function createRequest<T extends object, R extends object>(
  customConfig: RequestConfig
): (x: T) => Promise<BasicResponse<R>> {
  // mix config
  const config: RequestDefalultConfig = {
    ...defaultConfig,
    ...customConfig,
  };

  const res = (params: T) => {
    config.preCallback();
    return httpMethods[config.method]<R>(params, config).finally(() =>
      config.postCallback()
    );
  };

  return config.throttle ? PrimoseThrottle(res, config.throttle) : res;
}

export { abortController, createRequest };
