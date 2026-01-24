import { MongoClient } from "mongodb";

const senha = process.env.DB_PASS;

const cliente = new MongoClient(
  `mongodb+srv://alura:${senha}@aluracluster.zd8a0c5.mongodb.net/?appName=AluraCluster`
);

let documentosColecao;

try {
  await cliente.connect();
  
  const db = cliente.db("alura-websockets");

  documentosColecao = db.collection("documentos");

  console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
