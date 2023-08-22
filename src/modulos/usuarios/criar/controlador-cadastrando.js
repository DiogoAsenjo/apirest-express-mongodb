import { cadastrarUsuario } from "./cadastrando.js";

export function constroladorCadastro (req, res) {
    const { login, senha } = req.body;

    if(!login || !senha) {
        return res.status(400).send('Os campos usuario e senha são obrigatórios!');
    }

    const resposta = cadastrarUsuario(login, senha);
    
    return res.status(201).send(resposta);
}