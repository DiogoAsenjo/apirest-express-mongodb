import { atualizarSenha } from "./atualizando.js";

export function controladorAtualizacao(req, res) {
    const { usuario, senhaAntiga, senhaNova } = req.body;

    if(!usuario || !senhaAntiga || !senhaNova) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    const resposta = atualizarSenha(usuario, senhaAntiga, senhaNova);
    
    return res.status(201).send(resposta);
}