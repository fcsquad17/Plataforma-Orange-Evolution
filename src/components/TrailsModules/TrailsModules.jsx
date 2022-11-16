import ModulesContents from "../ModulesContents/ModulesContents";
import * as React from "react";
import { styled } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CirclePogressBar from "../CircleProgressBar/CirclePogressBar";
import { useState, useEffect } from "react";
import {
  getContentByIdModule,
  getFirstContentByIdModule,
} from "../../services/ContentsApi";
import { getLastContentByIdModule } from "../../services/UserContentApi";

import { progressBarCircle } from "../../utils/progressLogic";

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    sx={{ backgroundColor: "#001024" }}
    {...props}
  />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#2c2c2c",
  color: "#fff",
  borderRadius: "7px 7px 0px 0px",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid none",
}));

export default function TrailsModules({ TITULO, idModulo }) {
  const [lastSeen, setLastSeen] = useState(0);
  const [expanded, setExpanded] = React.useState("panel1");
  const [contents, setContents] = useState([]);
  const [progressModule, setProgressModule] = useState(0);
  const [reload, setReload] = useState(false);

  const idUser = localStorage.getItem("userId");

  const handleOnReq = async (idModule) => {
    const response = await getContentByIdModule(idModule);
    const content = await getLastContentByIdModule(idUser, idModule);
    const firstContentOfModule = await getFirstContentByIdModule(idModule);
    setContents(response.conteudos);

    if (idModule > 1) {
      setLastSeen(
        content.conteudo
          ? content.conteudo.ID - (firstContentOfModule.conteudo.ID - 1)
          : 0
      );
    } else {
      setLastSeen(content.conteudo ? content.conteudo.ID : 0);
    }

    const progress = await progressBarCircle(idUser, idModulo);
    setProgressModule(progress);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleOnReload = () => {
    setReload(true);
  };

  useEffect(() => {
    handleOnReq(idModulo);
  }, [reload]);

  useEffect(() => {
    if (reload) {
      setReload(false);
      handleOnReq(idModulo);
    }
  }, [reload]);

  return (
    <Accordion onChange={handleChange("panel1")}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography
          component={"span"}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          {TITULO}
          <CirclePogressBar progressModule={progressModule} />
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ backgroundColor: "#202C3B", borderRadius: "0px 0px 7px 7px" }}
      >
        <Typography component={"span"}>
          <ModulesContents
            contents={contents}
            ultimoVisto={lastSeen}
            handleOnReload={handleOnReload}
            sx={{ mb: 30 }}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
