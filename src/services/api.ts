import { UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const BASE_URL = "https://loomyl-2.onrender.com/";
//export const BASE_URL = "http://172.20.10.2:8080/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const handleResp = (resp: AxiosResponse<any, any>) => resp.data.data;

export default api;

const getError = (field: string, error: Error) =>
  JSON.parse(error.message)[field];

const getFieldError = (
  field: string,
  mutation: UseMutationResult<any, Error, any, unknown>
) => ({
  error: mutation.isError && ErrorUtils.getError(field, mutation.error),
  helperText: mutation.error ? ErrorUtils.getError(field, mutation.error) : "",
});

export const ErrorUtils = {
  getError,
  getFieldError,
};
