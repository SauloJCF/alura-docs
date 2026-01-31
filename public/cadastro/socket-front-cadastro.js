const socket = io();

function emitirCadastrarUsuario(dadosUsuario) {
    socket.emit("cadastrar_usuario", dadosUsuario);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));

socket.on("cadastro_erro", () => alert("Ocorreu um erro ao realizar o cadastro!"));

socket.on("usuario_ja_existe", () => alert("Usuário já existe!"))

export { emitirCadastrarUsuario };