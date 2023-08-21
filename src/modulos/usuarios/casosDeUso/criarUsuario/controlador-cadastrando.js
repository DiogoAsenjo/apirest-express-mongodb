export function constroladorCadastro (req, res) {
    const { id, usuario, senha } = req.body;
    console.log(id);
    if(!id || !usuario || !senha) res.status(400).send('Os campos id, usuario e senha são obrigatórios!')
    
    res.status(201).send(`${usuario} cadastrado!`);
}