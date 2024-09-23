import axios from "axios";

const BASE_URL = `${import.meta.env.BASE_URL}`;

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
