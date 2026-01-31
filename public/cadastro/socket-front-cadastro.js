const socket = io();

function emitirCadastrarUsuario(dadosUsuario) {
    socket.emit("cadastrar_usuario", dadosUsuario);
}

export { emitirCadastrarUsuario };