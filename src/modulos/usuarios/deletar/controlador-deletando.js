import { deletarUsuario } from "./deletando.js";

export function controladorDeleta (req, res) {
    const { login, senha } = req.body;

    if(!login || !senha) {
        return res.status(400).send('Para deletar um usuário é necessário informar o usuário e senha!');
    }

    const resposta = deletarUsuario(login, senha);
    
    return res.status(201).send(resposta);
}