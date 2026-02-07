import { definirToken } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJWT) => {
    definirToken("tokenJWT", tokenJWT);

    alert("Usuário autenticado com sucesso!");
    window.location.href = "/";
});

socket.on("autenticacao_erro", () => alert("Erro ao autenticar usuário."));

socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado."));

export { emitirAutenticarUsuario };