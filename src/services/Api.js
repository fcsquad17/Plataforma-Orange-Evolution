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

//Usuario-Conteudo

export const getContentOfUserByTrailId = async (idUser, idTrails) => {
  const response = await api.get(
    `/usuario-conteudo/conteudo-concluido/idUsuario/${idUser}/idTrilha/${idTrails}`
  );
  return response.data;
};

//Conteudos

export const getAllContentByTrailId = async (idTrail) => {
  const response = await api.get(`/conteudos/porIdTrilha/${idTrail}`);
  return response.data;
};

//Trilhas

export const getTrailParams = async (idTrail) => {
  const response = await api.get(`/trilhas/id/${idTrail}`);
  return response.data;
};
