import "dotenv/config";
import io from "./servidor.js";
import { listarDocumentos, atualizaDocumento, encontrarDocumento } from "./documentoDB.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou: " + socket.id);

  socket.on("carregar_documentos", async(devolverLista) => {
    const documentos = await listarDocumentos();
    
    devolverLista(documentos);
  });

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      // socket.emit("texto_documento", documento.texto);
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});


