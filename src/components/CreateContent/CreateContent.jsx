import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  putContentParams,
  postContentParams,
} from "../../services/ContentsApi";

export default function CreateContent({
  content,
  handleReload,
  handleClose,
  id,
}) {
  const [contentInfo, setContentInfo] = React.useState({
    TITULO: content ? content.TITULO : "",
    TIPO: content ? content.TIPO : "",
    DURACAO: content ? content.DURACAO : "",
    FONTE: content ? content.FONTE : "",
    DESCRICAO: content ? content.DESCRICAO : "",
    TAG: content ? content.TAG : "",
    MODULO_ID: content ? content.MODULO_ID : id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content) {
      await putContentParams(content.ID, contentInfo);
    } else {
      await postContentParams(contentInfo);
    }
    handleReload();
    handleClose();
  };

  const handleChange = (target, key) => {
    const value = target.value;
    setContentInfo({ ...contentInfo, [key]: value });
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
          {content ? "Edição de conteúdos" : "Adição de conteúdos"}
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
            type={"text"}
            required
            defaultValue={content ? content.TITULO : ""}
            onChange={({ target }) => handleChange(target, "TITULO")}
          />
          <TextField
            id="outlined-basic"
            label="Tipo"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            type={"text"}
            required
            defaultValue={content ? content.TIPO : ""}
            onChange={({ target }) => handleChange(target, "TIPO")}
          />
          <TextField
            id="outlined-basic"
            label="Duração"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            type={"number"}
            defaultValue={content ? content.DURACAO : ""}
            onChange={({ target }) => handleChange(target, "DURACAO")}
            required
          />
          <TextField
            id="outlined-basic"
            label="Fonte"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            type={"text"}
            required
            defaultValue={content ? content.FONTE : ""}
            onChange={({ target }) => handleChange(target, "FONTE")}
          />
          <TextField
            id="outlined-multline-flexbile"
            label="Descrição"
            variant="outlined"
            defaultValue={content ? content.DESCRICAO : ""}
            onChange={({ target }) => handleChange(target, "DESCRICAO")}
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            type={"text"}
            required
          />
          <TextField
            id="outlined-multline-flexbile"
            label="Tag"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            type={"text"}
            required
            defaultValue={content ? content.TAG : ""}
            onChange={({ target }) => handleChange(target, "TAG")}
          />
          <TextField
            id="outlined-multline-flexbile"
            label="ID do Módulo"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              fieldSet: {
                borderColor: "#fff",
              },
            }}
            type={"number"}
            required
            disabled={content ? false : true}
            defaultValue={content ? content.MODULO_ID : ""}
            onChange={({ target }) => handleChange(target, "MODULO_ID")}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ margin: "30px 0", color: "#fff" }}
            type="submit"
          >
            {content ? "Editar conteúdo" : "Criar Conteúdo"}
          </Button>
        </form>
      </Box>
    </>
  );
}
