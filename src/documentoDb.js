import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nomeDocumento) {
  const documentoEncontrado = documentosColecao.findOne({
    nome: nomeDocumento,
  });

  return documentoEncontrado;
}

function atualizaDocumento(nomeDocumento, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome: nomeDocumento,
    },
    {
      $set: {
        texto,
      },
    }
  );

  return atualizacao;
}

export { encontrarDocumento, atualizaDocumento };
