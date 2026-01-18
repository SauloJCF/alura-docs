import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "Texto de JavaScript..."
  },
  {
    nome: "Node",
    texto: "Texto de Node..."
  },
  {
    nome: "Socket.io",
    texto: "Texto de Socket.io..."
  },
];

io.on("connection", (socket) => {
  console.log("Um cliente se conectou: " + socket.id);

  socket.on("selecionar_documento", (nomeDocumento) => {
    const documento = encontrarDocumento(nomeDocumento);

    console.log(documento);

    socket.join(nomeDocumento);
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});

function encontrarDocumento(nomeDocumento) {
  const documentoEncontrado = documentos.find((documento) => {
    return documento.nome === nomeDocumento;
  });

  return documentoEncontrado;
}
