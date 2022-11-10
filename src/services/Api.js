import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-orange-evolution-production.up.railway.app",
});

//Usuarios

export const getUsersParams = async (id) => {
  const response = await api.get(`/usuarios/id/${id}`);
  return response.data;
};

export const getUserTrailsParams = async (idUser) => {
  const response = await api.get(`/usuarios/trilhaPorId/${idUser}`);
  return response.data;
};

export const postUserLogin = async (user) => {
  const response = await api.post(`/usuarios/login`, user);
  return response.data;
};

export const postUser = async (user) => {
  const response = await api.post(`/usuarios`, user);
  return response.data;
};

//Usuario-Conteudo

export const getContentOfUserByTrailId = async (idUser, idTrails) => {
  const response = await api.get(
    `/usuario-conteudo/conteudo-concluido/idUsuario/${idUser}/idModulo/${idTrails}`
  );
  return response.data;
};
