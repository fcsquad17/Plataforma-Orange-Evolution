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

export const putUser = async (userId, user) => {
  const response = await api.put(`/usuarios/id/${userId}`, user);
  return response.data;
};

//Usuario-Conteudo

export const getContentOfUserByTrailId = async (idUser, idTrails) => {
  const response = await api.get(
    `/usuario-conteudo/conteudo-concluido/idUsuario/${idUser}/idTrilha/${idTrails}`
  );
  return response.data;
};

export const getLastContentByIdModule = async (idUser, idModule) => {
  const response = await api.get(
    `/usuario-conteudo/ultimo-concluido/idUsuario/${idUser}/idModulo/${idModule}`
  );
  return response.data;
};

export const getContentOfUserByModuleId = async (idUser, idModule) => {
  const response = await api.get(
    `/usuario-conteudo/conteudo-concluido/idUsuario/${idUser}/idModulo/${idModule}`
  );
  return response.data;
};

export const postContentOfUserDone = async (body) => {
  const response = await api.post(`/usuario-conteudo`, body);
  return response.data;
};

export const deleteContentOfUser = async (idUser, idContent) => {
  const response = await api.delete(
    `/usuario-conteudo/idUser/${idUser}/idContent/${idContent}`
  );
  return response.data;
};

//Conteudos

export const getAllContentByTrailId = async (idTrail) => {
  const response = await api.get(`/conteudos/porIdTrilha/${idTrail}`);
  return response.data;
};

export const getContentByIdModule = async (idModule) => {
  const response = await api.get(`/conteudos/porIdModulo/${idModule}`);
  return response.data;
};

export const getFirstContentByIdModule = async (idModule) => {
  const response = await api.get(`/conteudos/idModulo/${idModule}`);
  return response.data;
};

export const getFirstContentByIdTrail = async (idTrail) => {
  const response = await api.get(`/conteudos/idTrilha/${idTrail}`);
  return response.data;
};

//Trilhas

export const getTrailParams = async (idTrail) => {
  const response = await api.get(`/trilhas/id/${idTrail}`);
  return response.data;
};

export const getAllTrails = async () => {
  const response = await api.get("/trilhas");
  return response.data;
};

//Modulos

export const getModuleByIdTrail = async (idTrail) => {
  const response = await api.get(`/modulos/porIdTrilha/${idTrail}`);
  return response.data;
};
