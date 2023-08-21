import  express from 'express';
import rotas from './rotas.js';

const app = express();
const port = process.env.PORT || 3333; //É boa prática pra ir se acostumando já colocar o process.env, pois será o futuro ambiente de produção. 

app.use(express.json());

//Aqui estou puxando todas as rotas do arquivo rotas.js. Modularizando a aplicação.
app.use(rotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})

export default app