import { cadastrarUsuario } from "./cadastrando.js";

export function constroladorCadastro (req, res) {
    const { usuario, senha } = req.body;
    const resposta = cadastrarUsuario(usuario, senha);

    if(!usuario || !senha) res.status(400).send('Os campos usuario e senha são obrigatórios!');
    
    res.status(201).send(resposta);
}