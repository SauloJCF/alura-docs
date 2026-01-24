import "dotenv/config";
import { documentosColecao } from "./dbConnect.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou: " + socket.id);

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      // socket.emit("texto_documento", documento.texto);
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      documento.texto = texto;
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});

function encontrarDocumento(nomeDocumento) {
  const documentoEncontrado = documentosColecao.findOne({
    nome: nomeDocumento,
  });

  return documentoEncontrado;
}
