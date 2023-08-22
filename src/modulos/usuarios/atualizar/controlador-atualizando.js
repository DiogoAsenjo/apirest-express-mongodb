import { atualizarSenha } from "./atualizando.js";

export function controladorAtualizacao(req, res) {
    const { login, senhaAntiga, senhaNova } = req.body;

    if(!login || !senhaAntiga || !senhaNova) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    const resposta = atualizarSenha(login, senhaAntiga, senhaNova);
    
    return res.status(201).send(resposta);
}