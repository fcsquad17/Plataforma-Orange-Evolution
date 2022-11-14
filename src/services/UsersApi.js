import { Api } from "./Api";

export const getUsersParams = async (id) => {
  const response = await Api.get(`/usuarios/id/${id}`);
  return response.data;
};

export const getUserTrailsParams = async (idUser) => {
  const response = await Api.get(`/usuarios/trilhaPorId/${idUser}`);
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
  const response = await Api.put(`/usuarios/id/${userId}`, user);
  return response.data;
};
