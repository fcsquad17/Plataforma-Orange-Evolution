import { Api } from "./Api";

export const getModuleByIdTrail = async (idTrail) => {
  const response = await Api.get(`/modulos/porIdTrilha/${idTrail}`);
  return response.data;
};

export const postModuleParams = async (module) => {
  const response = await Api.post(`/modulos/`, module);
  return response.data;
};

export const putModuleParams = async (idModule, module) => {
  const response = await Api.put(`/modulos/id/${idModule}`, module);
  return response.data;
};

export const deleteModuleParams = async (idModule) => {
  const response = await Api.delete(`/modulos/id/${idModule}`);
  return response.data;
};
