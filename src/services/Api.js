import axios from "axios";

// export const Api = axios.create({
//   baseURL: "https://Api-orange-evolution-production.up.railway.app",
// });

export const Api = axios.create({
  baseURL: "http://localhost:3000",
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
