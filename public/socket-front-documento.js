import { atualizaTextoEditor } from "./documento.js";

const socket = io();

export const selecionarDocumento = (nome) => {
  socket.emit("selecionar_documento", nome);
}

export const emitirTextoEditor = (texto) => {
  socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});