import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    try {
        const token = socket.handshake.auth.token;

        const payloadToken = jwt.verify(token, process.env.SEGREDO_JWT);

        socket.emit("autorizacao_sucesso", payloadToken);

        next();
    } catch (error) {
        next(error);
    }
}

export default autorizarUsuario;