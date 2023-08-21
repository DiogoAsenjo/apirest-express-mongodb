import { Router } from "express";
import { usuarios } from "../banco/usuarios.js";
import { constroladorCadastro } from "../modulos/usuarios/casosDeUso/criarUsuario/controlador-cadastrando.js";

const rotas = Router();

//Página inicial
rotas.get('/', (requisicao, resposta) => {
    resposta.status(200).send('Bem vindo a nossa página inicial!');
})

//Listar todos os usuários, como todos os dados
rotas.get('/pessoas', (requisicao, resposta) => {
    resposta.status(200).json(usuarios);
})

//Mostrar apenas um usuário específico
//rotas.get('')

//Cadastrar um usuário
rotas.post('/cadastrar', (req, res) => {
    constroladorCadastro(req, res);
})

export default rotas