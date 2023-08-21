import express from express;

const app = express();

const pessoas = [
    {nome: 'Diogo', sobrenome: 'Asenjo'},
    {nome: 'Bianca', sobrenome: 'Borges'}
]

app.get('/', (requisição, resposta) => {
    resposta.status(200).send('Bem vindo a página inicial!');
})

app.get('/pessoas', (requisição, resposta) => {
    resposta.status(200).json(pessoas);
})