import * as React from "react";
import { getContentByIdModule } from "../../services/Api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  { field: "ID", headerName: "ID", width: 70 },
  { field: "TITULO", headerName: "Título", width: 130 },
  { field: "DESCRICAO", headerName: "Descrição", width: 130 },
  { field: "TIPO", headerName: "Tipo", width: 130 },
  { field: "DURACAO", headerName: "Duração", width: 130 },
  { field: "FONTE", headerName: "Fonte", width: 130 },
  { field: "TAG", headerName: "Tag", width: 130 },
  { field: "MODULO_ID", headerName: "Modulo id", width: 130 },
];

export default function DataTableAdmin({ idModule }) {
  const [contents, setContents] = React.useState([]);

  const handleReq = async (idModule) => {
    const response = await getContentByIdModule(idModule);
    setContents(response.conteudos);
  };

  const deleteIcon = (
    <IconButton onClick={console.log("delete")}>
      <DeleteIcon color="secondary" />
    </IconButton>
  );

  const editIcon = (
    <IconButton onClick={console.log("edited")}>
      <EditIcon color="primary" />
    </IconButton>
  );

  React.useEffect(() => {
    handleReq(idModule);
  }, []);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Duração</TableCell>
              <TableCell>Fonte</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Modulo ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contents.map((content) => {
              return (
                <TableRow key={content.ID}>
                  <TableCell component="th" scope="row">
                    <IconButton onClick={() => {console.log("delete")}}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => {console.log("edited")}}>
                      <EditIcon color="primary" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{content.ID}</TableCell>
                  <TableCell>{content.TITULO}</TableCell>
                  <TableCell>{content.TIPO}</TableCell>
                  <TableCell>{content.DESCRICAO}</TableCell>
                  <TableCell>{content.DURACAO}</TableCell>
                  <TableCell>{content.FONTE}</TableCell>
                  <TableCell>{content.TAG}</TableCell>
                  <TableCell>{content.MODULO_ID}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
