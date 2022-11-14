import { Api } from "./Api";

export const getTrailParams = async (idTrail) => {
  const response = await Api.get(`/trilhas/id/${idTrail}`);
  return response.data;
};

export const getAllTrails = async () => {
  const response = await Api.get("/trilhas");
  return response.data;
};

export const postTrailParams = async (trail) => {
  const response = await Api.post(`/trilhas/`, trail);
  return response.data;
};

export const putTrailParams = async (idTrail, trail) => {
  const response = await Api.put(`/trilhas/id/${idTrail}`, trail);
  return response.data;
};

export const deleteTrailParams = async (idTrail) => {
  const response = await Api.delete(`/trilhas/id/${idTrail}`);
  return response.data;
};
