import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api-orange-evolution-production-a479.up.railway.app",
});

export const globalApiVariables = () => {
  const userToken = localStorage.getItem("userToken");

  const config = {
    headers: {
      Authorization: userToken,
    },
  };
  return config;
};
