import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function cadastrarUsuario({ nome, senha }) {
    const { salSenha, hashSenha } = criaHashESalSenha(senha);

    return usuariosColecao.insertOne({ nome, salSenha, hashSenha });
}

function encontrarUsuario(nome) {
    return usuariosColecao.findOne({ nome })
}

export { cadastrarUsuario, encontrarUsuario };