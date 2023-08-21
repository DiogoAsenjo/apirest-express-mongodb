import { cadastrarUsuario } from "./cadastrando.js";

export function constroladorCadastro (req, res) {
    const { id, usuario, senha } = req.body;
    if(!id || !usuario || !senha) res.status(400).send('Os campos id, usuario e senha são obrigatórios!')
    const resposta = cadastrarUsuario(id, usuario, senha)
    
    res.status(201).send(resposta);
}