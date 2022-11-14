import { Api } from "./Api";

export const getContentParams = async (idContent) => {
  const response = await Api.get(`/conteudos/id/${idContent}`);
  return response.data;
};

export const getAllContentByTrailId = async (idTrail) => {
  const response = await Api.get(`/conteudos/porIdTrilha/${idTrail}`);
  return response.data;
};

export const getContentByIdModule = async (idModule) => {
  const response = await Api.get(`/conteudos/porIdModulo/${idModule}`);
  return response.data;
};

export const getFirstContentByIdModule = async (idModule) => {
  const response = await Api.get(`/conteudos/idModulo/${idModule}`);
  return response.data;
};

export const getFirstContentByIdTrail = async (idTrail) => {
  const response = await Api.get(`/conteudos/idTrilha/${idTrail}`);
  return response.data;
};

export const postContentParams = async (content) => {
  const response = await Api.post(`/conteudos/`, content);
  return response.data;
};

export const putContentParams = async (idContent, content) => {
  const response = await Api.put(`/conteudos/id/${idContent}`, content);
  return response.data;
};

export const deleteContentParams = async (idContent) => {
  const response = await Api.delete(`/conteudos/id/${idContent}`);
  return response.data;
};
