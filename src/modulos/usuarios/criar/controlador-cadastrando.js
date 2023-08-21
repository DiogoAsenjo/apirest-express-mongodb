import { cadastrarUsuario } from "./cadastrando.js";

export function constroladorCadastro (req, res) {
    const { usuario, senha } = req.body;

    if(!usuario || !senha) {
        return res.status(400).send('Os campos usuario e senha são obrigatórios!');
    }

    const resposta = cadastrarUsuario(usuario, senha);
    
    return res.status(201).send(resposta);
}