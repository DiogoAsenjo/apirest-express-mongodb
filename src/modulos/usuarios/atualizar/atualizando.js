import { usuarios } from "../../../banco/usuarios.js";

function verificacaoSenhaSegura(senha) {
        if(senha.length < 8) {
            return `A senha deve ter no mínimo 8 caracteres`; 
        }
        if((!/[a-z]/.test(senha))) {
            return `A senha deve ter ao menos uma letra minúscula`;
        }
        if((!/[A-Z]/.test(senha))) {
            return `A senha deve ter ao menos uma letra maiúscula`;
        }
        if((!/[0-9]/.test(senha))) {
            return `A senha deve ter ao menos um número`;
        }
        if((!/\W/.test(senha))) {
            return `A senha deve ter ao menos um caracter especial`;
        }
    
        return true;
    }

export function atualizarSenha(usuario, senha) {
        const usuarioExistente = usuarios.find((item) => item["usuario"].includes(usuario));
        if(!usuarioExistente) return 'Usuário não existe, digite um usuário válido!';

        //Função para validar a senha. Procurar o index com base no usuario e verificar se a senha bate.

        //Validada a senha, criar a função para alterar a senha com base no index pego na parte de cima. Usar a verificação de senha segura para saber se bate com os critérios de segurança


        //Alterar a senha no array de objetos. Provavelmente usando splice();
        usuarios.push({usuario, senha});
        return 'Senha alterada com sucesso!'
}