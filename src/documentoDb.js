import { documentosColecao } from "./dbConnect.js";

function listarDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}

function adicionarDocumento(nomeDocumento) {
  const resultado = documentosColecao.insertOne({
    nome: nomeDocumento,
    texto: "",
  });

  return resultado;
}

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
    },
  );

  return atualizacao;
}

export {
  listarDocumentos,
  adicionarDocumento,
  encontrarDocumento,
  atualizaDocumento,
};
