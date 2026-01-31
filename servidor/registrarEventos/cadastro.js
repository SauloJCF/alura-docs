import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar_usuario", async (dadosUsuario) => {
        const usuario = await encontrarUsuario(dadosUsuario.nome);

        if (usuario === null) {
            const resultado = await cadastrarUsuario(dadosUsuario);

            if (resultado.acknowledged) {
                socket.emit("cadastro_sucesso");
            } else {
                socket.emit("cadastro_erro");
            }
        } else {
            socket.emit("usuario_ja_existe");
        }
    });
}

export default registrarEventosCadastro;