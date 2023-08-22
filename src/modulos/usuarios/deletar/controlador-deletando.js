import { deletarUsuario } from "./deletando.js";

export function controladorDeleta (req, res) {
    const { usuario, senha } = req.body;

    if(!usuario || !senha) {
        return res.status(400).send('Para deletar um usuário é necessário informar o usuário e senha!');
    }

    const resposta = deletarUsuario(usuario, senha);
    
    return res.status(201).send(resposta);
}