import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Api {
  private api: AxiosInstance;

  public constructor() {
    this.api = axios.create(ApiConfig);
  }

  public getUri(config?: AxiosRequestConfig): string {
    return this.api.getUri(config);
  }

  public request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.api.request(config);
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.get(url, config);
  }

  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.delete(url, config);
  }

  public head<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.head(url, config);
  }

  public post<T, R = AxiosResponse<T>>(
    url: string,
    data?: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.post(url, data, config);
  }

  public put<T, R = AxiosResponse<T>>(
    url: string,
    data?: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.put(url, data, config);
  }

  public patch<T, R = AxiosResponse<T>>(
    url: string,
    data?: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.patch(url, data, config);
  }
}

const ApiConfig = {
  returnRejectedPromiseOnError: true,
  withCredentials: true,
  timeout: 30 * 1000,
  baseURL: "https://reqres.in/",
  headers: {
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
};
