import app from './src/app.js'

const port = process.env.PORT || 3333; //É boa prática pra ir se acostumando já colocar o process.env, pois será o futuro ambiente de produção. 


app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})