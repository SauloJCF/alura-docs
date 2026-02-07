import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    try {
        const token = socket.handshake.auth.token;

        jwt.verify(token, process.env.SEGREDO_JWT);

        next();
    } catch (error) {
        next(error);
    }
}

export default autorizarUsuario;