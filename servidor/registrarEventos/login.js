import { encontrarUsuario } from "../db/usuariosdb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io) {
    socket.on("autenticar_usuario", async ({ nome, senha }) => {
        const usuario = await encontrarUsuario(nome);

        if (usuario) {
            const autenticado = autenticarUsuario(senha, usuario);

            if (autenticado) {
                const jwt = gerarJwt({nomeUsuario: nome});

                console.log(jwt);                

                socket.emit("autenticacao_sucesso", jwt);
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_encontrado");
        }
    });
}

export default registrarEventosLogin;