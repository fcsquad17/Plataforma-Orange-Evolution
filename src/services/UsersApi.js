import { Api, globalApiVariables } from "./Api";

export const getUsersParams = async (id) => {
  const response = await Api.get(`/usuarios/id/${id}`, globalApiVariables());
  return response.data;
};

export const getUserTrailsParams = async (id) => {
  const response = await Api.get(
    `/usuarios/trilhaPorId/${id}`,
    globalApiVariables()
  );
  return response.data;
};

export const postUserLogin = async (user) => {
  const response = await Api.post(`/usuarios/login`, user);
  return response.data;
};

export const postUser = async (user) => {
  const response = await Api.post(`/usuarios`, user);
  return response.data;
};

export const putUser = async (userId, user) => {
  const response = await Api.put(
    `/usuarios/id/${userId}`,
    user,
    globalApiVariables()
  );
  return response.data;
};
