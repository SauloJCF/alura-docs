import { adicionaDocumento } from "./index.js";

const socket = io();

socket.emit("carregar_documentos", (documentos) => {
  documentos.forEach((documento) => adicionaDocumento(documento.nome));
});
