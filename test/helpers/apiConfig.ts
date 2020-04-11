import { PathLike } from "fs";
import qs from "qs";

export const ApiConfig = {
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
