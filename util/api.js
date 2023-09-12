import axios from "axios";
import { getStoreData } from "./util.js";

export const instance = axios.create({
  baseURL: "http://192.168.201.42:9000",
  // headers: {
  //   Authorization: `Bearer ${getStoreData("token")}`,
  // },
});