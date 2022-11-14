import * as React from "react";
import { getContentByIdModule } from "../../services/ContentsApi";
import { useState } from "react";
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
import AlertDialog from "../AlertDialog/AlertDialog";
import ModalForm from "../ModalForm/ModalForm";

export default function DataTableAdmin({ idModule, reloadAd }) {
  const [contents, setContents] = useState([]);
  const [selectedContentDelete, setSelectedContentDelete] = useState(0);
  const [selectedContentEdit, setSelectedContentEdit] = useState(0);
  const [reload, setReload] = useState(false);

  const handleReq = async (idModule) => {
    const response = await getContentByIdModule(idModule);
    setContents(response.conteudos);
  };

  const handleOpenDelete = (content) => {
    setSelectedContentDelete((selectedContent) =>
      selectedContent.ID === content.ID ? null : content
    );
  };

  const handleCloseDelete = () => {
    setSelectedContentDelete(0);
  };

  const handleOpenEdit = (content) => {
    setSelectedContentEdit((selectedContent) =>
      selectedContent.ID === content.ID ? 0 : content
    );
  };

  const handleCloseEdit = () => {
    setSelectedContentEdit(0);
  };

  const handleReload = () => {
    setReload(true);
  };

  React.useEffect(() => {
    console.log(reload);
    if (reload) {
      setReload(false);
    }
    handleReq(idModule);
  }, [reload, reloadAd]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell align="center">Duração</TableCell>
            <TableCell>Fonte</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Modulo ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contents.map((content) => {
            return (
              <TableRow key={content.ID}>
                <TableCell sx={{ minHeight: "75px" }}>
                  <AlertDialog
                    open={selectedContentDelete.ID === content.ID}
                    handleClose={handleCloseDelete}
                    title={content.TITULO}
                    sx={{ backgroundColor: "#202C3B" }}
                    handleReload={handleReload}
                    id={content.ID}
                    content={true}
                  />
                  <IconButton
                    onClick={() => {
                      handleOpenDelete(content);
                    }}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                  <ModalForm
                    open={selectedContentEdit.ID === content.ID}
                    content={content}
                    handleClose={handleCloseEdit}
                    handleReload={handleReload}
                    put={true}
                  />
                  <IconButton
                    onClick={() => {
                      handleOpenEdit(content);
                    }}
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                </TableCell>
                <TableCell>{content.ID}</TableCell>
                <TableCell>{content.TITULO}</TableCell>
                <TableCell>{content.TIPO}</TableCell>
                <TableCell>{content.DESCRICAO}</TableCell>
                <TableCell align="center">{content.DURACAO}</TableCell>
                <TableCell>{content.FONTE}</TableCell>
                <TableCell>{content.TAG}</TableCell>
                <TableCell>{content.MODULO_ID}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
