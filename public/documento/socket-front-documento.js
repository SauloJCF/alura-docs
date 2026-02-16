import { obterCookie } from "../utils/cookies.js";
import { alertarERedirecionar, atualizarListaUsuariosDocumento, atualizaTextoEditor, tratarAutorizacaoSucesso } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJWT")
  }
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on("usuarios_no_documento", atualizarListaUsuariosDocumento);

socket.on("usuario_ja_no_documento", () => {
  alert("O usuário já está conectado neste documento!");
  window.location.href = "/";
})

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login/index.html";
});

function selecionarDocumento(dadosEntrada) {
  socket.emit("selecionar_documento", dadosEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
