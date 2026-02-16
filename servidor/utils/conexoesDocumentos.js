const conexoesDocumentos = [];

function encontrarConexao(nomeDocumento, nomeUsuario) {
    return conexoesDocumentos.find(conexao => conexao.nomeUsuario === nomeUsuario && conexao.nomeDocumento === nomeDocumento);
}

function adicionarConexao(conexao) {
    conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
    return conexoesDocumentos
        .filter(conexao => conexao.nomeDocumento === nomeDocumento)
        .map(conexao => conexao.nomeUsuario);
}

function removerConexao(nomeUsuario, nomeDocumento) {
    const index = conexoesDocumentos.findIndex(conexao => conexao.nomeUsuario === nomeUsuario && conexao.nomeDocumento === nomeDocumento);

    if (index !== -1) {
        conexoesDocumentos.splice(index, 1);
    }
}

export { encontrarConexao, adicionarConexao, obterUsuariosDocumento, removerConexao };