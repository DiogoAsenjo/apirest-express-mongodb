import { Router } from "express";
import { usuarios } from "../banco/usuarios.js";
import { constroladorCadastro } from "../modulos/usuarios/criar/controlador-cadastrando.js";
import { controladorAtualizacao } from "../modulos/usuarios/atualizar/controlador-atualizando.js";
import { controladorDeleta } from "../modulos/usuarios/deletar/controlador-deletando.js";

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
rotas.get('/pessoas/:id', (req, res) => {
    res.status(200).json(usuarios[req.params.id].login);
})

//Cadastrar um usuário
rotas.post('/cadastrar', (req, res) => {
    constroladorCadastro(req, res);
})

//Alterar usuário
rotas.patch('/atualizar', (req, res) => {
    controladorAtualizacao(req, res);
})

//Deletar usuário
rotas.delete('/deletar', (req, res) => {
    controladorDeleta(req, res);
})

export default rotas