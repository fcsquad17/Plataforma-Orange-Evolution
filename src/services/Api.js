import axios from "axios";

export const Api = axios.create({
  baseURL: "https://Api-orange-evolution-production.up.railway.app",
});
