function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar_usuario", (dadosUsuario) => {
        console.log(dadosUsuario);
    });
}

export default registrarEventosCadastro;