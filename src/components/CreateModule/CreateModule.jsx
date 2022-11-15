import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { putModuleParams, postModuleParams } from "../../services/ModulesApi";

export default function CreateModule({
  module,
  handleReload,
  handleClose,
  id,
}) {
  const [moduleInfo, setModuleInfo] = React.useState({
    TITULO: module ? module.TITULO : "",
    DESCRICAO: module ? module.DESCRICAO : "",
    MODULO_ID: module ? module.TRILHA_ID : id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (module) {
      await putModuleParams(module.ID, moduleInfo);
    } else {
      await postModuleParams(moduleInfo);
    }
    handleReload();
    handleClose();
  };

  const handleChange = (target, key) => {
    const value = target.value;
    setModuleInfo({ ...moduleInfo, [key]: value });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          width: "90%",
          minHeight: "50vh",
        }}
      >
        <Typography variant="h5" component="h5" sx={{ marginBottom: "30px" }}>
          {module ? "Edição de módulos" : "Criação de módulos"}
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            width: "90%",
            minHeight: "50vh",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Título"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            defaultValue={module ? module.TITULO : ""}
            required
            onChange={({ target }) => handleChange(target, "TITULO")}
          />
          <TextField
            id="outlined-multline-flexbile"
            label="Descrição"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            defaultValue={module ? module.DESCRICAO : ""}
            required
            onChange={({ target }) => handleChange(target, "DESCRICAO")}
          />
          <TextField
            id="outlined-multline-flexbile"
            label="ID da Trilha"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            disabled={module ? false : true}
            defaultValue={module ? module.TRILHA_ID : ""}
            required
            onChange={({ target }) => handleChange(target, "TRILHA_ID")}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ margin: "30px 0", color: "#fff" }}
            type="submit"
          >
            {module ? "Editar módulo" : "Criar módulo"}
          </Button>
          <Button onClick={handleClose} sx={{ margin: "30px 0" }}>
            Voltar
          </Button>
        </form>
      </Box>
    </>
  );
}
