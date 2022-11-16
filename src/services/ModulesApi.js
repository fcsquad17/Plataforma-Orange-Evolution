import { Api, globalApiVariables } from "./Api";

export const getModuleByIdTrail = async (idTrail) => {
  const response = await Api.get(
    `/modulos/porIdTrilha/${idTrail}`,
    globalApiVariables()
  );
  return response.data;
};

export const postModuleParams = async (module) => {
  const response = await Api.post(`/modulos/`, module, globalApiVariables());
  return response.data;
};

export const putModuleParams = async (idModule, module) => {
  const response = await Api.put(
    `/modulos/id/${idModule}`,
    module,
    globalApiVariables()
  );
  return response.data;
};

export const deleteModuleParams = async (idModule) => {
  const response = await Api.delete(
    `/modulos/id/${idModule}`,
    globalApiVariables()
  );
  return response.data;
};
