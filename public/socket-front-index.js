import { adicionaDocumento, removerDocumento } from "./index.js";

const socket = io();

socket.emit("carregar_documentos", (documentos) => {
  documentos.forEach((documento) => adicionaDocumento(documento.nome));
});

function emitirAdicionaDocumento(nomeDocumento) {
  socket.emit("adiciona_documento", nomeDocumento);
}

socket.on("adiciona_documento_interface", (nomeDocumento) => {
  adicionaDocumento(nomeDocumento);
});

socket.on("documento_existente", (nomeDocumento) => {
  alert(`O documento ${nomeDocumento} já existe!`);
});

socket.on("excluir_documento_sucesso", (nomeDocumento) => {
  removerDocumento(nomeDocumento);
});

export { emitirAdicionaDocumento };
