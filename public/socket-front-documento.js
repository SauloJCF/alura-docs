import { atualizaTextoEditor } from "./documento.js";

const socket = io();

export const emitirTextoEditor = (texto) => {
    socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});