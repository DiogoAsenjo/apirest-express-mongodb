const http = require('http');
const port = 3333;

const rotas = {
    '/': 'Servidor funcionando normalmente!',
    '/nodeJS': 'Diogo, Ellen, Murilo, Neemias e Pedro',
    '/techlead': 'Issac monstro'
}

const server = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/plain'});
    resposta.end(rotas[requisição.url]);
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})