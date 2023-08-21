import  express from 'express';

const app = express();
app.use(express.json());

const usuarios = [
    {
        id: 1,
        usuario: "diogo.asenjo@modalgr.com.br",
        senha: "diogo123"
    },
    {
        id: 2,
        usuario: "gabriel.matiucci@modalgr.com.br",
        senha: "gabrielremador"
    }
]

//Página inicial
app.get('/', (requisição, resposta) => {
    resposta.status(200).send('Bem vindo a nossa página inicial!');
})

//Listar todos os usuários, como todos os dados
app.get('/pessoas', (requisição, resposta) => {
    resposta.status(200).json(usuarios);
})

//Mostrar apenas um usuário específico
//app.get('')

//Adicionar um usuário
app.post('/adicionar', (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).send(`${novoUsuario.usuario} cadastrado!`);
})

export default app