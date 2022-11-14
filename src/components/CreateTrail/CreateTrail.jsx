import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { putTrailParams, postTrailParams } from "../../services/Api";

export default function CreateTrail({ trail, handleReload, handleClose }) {
  const [trailInfo, setTrailInfo] = React.useState({
    TITULO: trail ? trail.TITULO : "",
    DESCRICAO: trail ? trail.DESCRICAO : "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (trail) {
      await putTrailParams(trail.ID, trailInfo);
    } else {
      await postTrailParams(trailInfo);
    }
    handleReload();
    handleClose();
  };

  const handleChange = (target, key) => {
    const value = target.value;
    setTrailInfo({ ...trailInfo, [key]: value });
  };

  return (
    <Box
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        width: "100%",
        minHeight: "50vh",
      }}
    >
      <Typography variant="h5" component="h5" sx={{ marginBottom: "30px" }}>
        {trail ? "Edição de trilhas" : "Adição de trilhas"}
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          width: "90%"
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Título"
          variant="outlined"
          fullWidth
          required
          multiline
          sx={{
            fieldSet: {
              borderColor: "#fff",
            },
          }}
          defaultValue={trail ? trail.TITULO : ""}
          onChange={({ target }) => handleChange(target, "TITULO")}
        />
        <TextField
          id="outlined-multline-flexbile"
          label="Descrição"
          variant="outlined"
          multiline
          required
          fullWidth
          sx={{
            fieldSet: {
              borderColor: "#fff",
            },
          }}
          defaultValue={trail ? trail.DESCRICAO : ""}
          onChange={({ target }) => handleChange(target, "DESCRICAO")}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ margin: "30px 0", color: "#fff" }}
          type="submit"
        >
          {trail ? "Editar trilha" : "Criar trilha"}
        </Button>
        <Button onClick={handleClose} sx={{ margin: "30px 0" }}>Voltar</Button>
      </form>
    </Box>
  );
}
