import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function CreateContent() {
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
          Adição de conteúdos
        </Typography>
        <TextField
          id="outlined-basic"
          label="Título"
          variant="outlined"
          fullWidth
          sx={{
            fieldSet: {
              borderColor: "#fff",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Tipo"
          variant="outlined"
          fullWidth
          sx={{
            fieldSet: {
              borderColor: "#fff",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Duração"
          variant="outlined"
          fullWidth
          sx={{
            fieldSet: {
              borderColor: "#fff",
            },
          }}
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
        />
        <Button
          variant="contained"
          size="large"
          sx={{ margin: "30px 0", color: "#fff" }}
        >
          Criar conteúdo
        </Button>
      </Box>
    </>
  );
}
