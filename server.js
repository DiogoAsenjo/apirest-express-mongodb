const http = require('http');
const port = 3333;

const server = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/plain'});
    resposta.end('Servidor funcionando normalmente!');
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})