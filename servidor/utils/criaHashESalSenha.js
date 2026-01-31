import { randomBytes, scryptSync } from "crypto";

function criaHashESalSenha(senhaOriginal) {
    const salSenha = randomBytes(16).toString("hex");
    const hashSenha = scryptSync(senhaOriginal, salSenha, 64).toString("hex");

    return { salSenha, hashSenha };
}

export default criaHashESalSenha;