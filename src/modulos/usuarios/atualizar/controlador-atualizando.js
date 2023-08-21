import { atualizarSenha } from "./atualizando.js";

export function controladorAtualizacao(req, res) {
    const { usuario, senhaAntiga, novaSenha } = req.body;

    if(!usuario || !senhaAntiga || !novaSenha) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    const resposta = atualizarSenha(usuario, senha);
    
    return res.status(201).send(resposta);
}