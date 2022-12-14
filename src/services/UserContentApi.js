import { Api, globalApiVariables } from "./Api";

export const getContentOfUserByTrailId = async (idUser, idTrails) => {
  const response = await Api.get(
    `/usuario-conteudo/conteudo-concluido/idUsuario/${idUser}/idTrilha/${idTrails}`,
    globalApiVariables()
  );
  return response.data;
};

export const getLastContentByIdModule = async (idUser, idModule) => {
  const response = await Api.get(
    `/usuario-conteudo/ultimo-concluido/idUsuario/${idUser}/idModulo/${idModule}`,
    globalApiVariables()
  );
  return response.data;
};

export const getContentOfUserByModuleId = async (idUser, idModule) => {
  const response = await Api.get(
    `/usuario-conteudo/conteudo-concluido/idUsuario/${idUser}/idModulo/${idModule}`,
    globalApiVariables()
  );
  return response.data;
};

export const postContentOfUserDone = async (body) => {
  const response = await Api.post(
    `/usuario-conteudo`,
    body,
    globalApiVariables()
  );
  return response.data;
};

export const deleteContentOfUser = async (idUser, idContent) => {
  const response = await Api.delete(
    `/usuario-conteudo/idUser/${idUser}/idContent/${idContent}`,
    globalApiVariables()
  );
  return response.data;
};
