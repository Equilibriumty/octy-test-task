import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { API_KEY, BASE_URL } from "../config";

const client = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: API_KEY,
  },
});

type TErr = { success: false; error: string };

async function fetcher<TData, TBody = unknown>(
  url: string,
  {
    method = "GET",
    data,
    ...config
  }: AxiosRequestConfig & {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  } = {},
): Promise<TData | TErr> {
  try {
    const response = await client.request<TData>({
      url,
      method,
      data: method !== "GET" ? data : undefined,
      ...config,
    });
    return response.data;
    // biome-ignore lint/suspicious/noExplicitAny: runtime check
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
    return {
      success: false,
      error: error.message,
    };
  }
}

export { fetcher };
