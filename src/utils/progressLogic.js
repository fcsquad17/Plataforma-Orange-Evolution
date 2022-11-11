import {
  getAllContentByTrailId,
  getContentOfUserByTrailId,
  getTrailParams,
  getContentOfUserByModuleId,
  getContentByIdModule,
} from "../services/Api";

export const progressBarTrail = async (idUser, idTrail) => {
  const done = await getContentOfUserByTrailId(idUser, idTrail);
  const allContent = await getAllContentByTrailId(idTrail);
  const trailDetail = await getTrailParams(idTrail);

  const allDone = done.conteudos.map((content) => content.ID);

  const total = allContent.conteudos.map((content) => content.ID);
  return {
    ID: trailDetail.trilha.ID,
    TITULO: trailDetail.trilha.TITULO,
    DESCRICAO: trailDetail.trilha.DESCRICAO,
    PROGRESSO: allDone ? Math.round((allDone.length * 100) / total.length) : 0,
  };
};

export const progressBarCircle = async (idUser, idModule) => {
  const done = await getContentOfUserByModuleId(idUser, idModule);
  const allContent = await getContentByIdModule(idModule);

  const allDone = done.conteudos.map((content) => content.ID);
  const total = allContent.conteudos.map((content) => content.ID);

  return allDone ? Math.round((allDone.length * 100) / total.length) : 0;
};
