import { Usuario } from "../../../banco/usuario.model.js";
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

export function cadastrarUsuario(login, senha) {
        const usuarioExistente = usuarios.find((item) => item["login"] === login);
        if(usuarioExistente) return 'Usuário já existe';

        const usandoEmailInstitucional = login.endsWith("@modalgr.com.br");
        if(!usandoEmailInstitucional) return 'É preciso se cadastrar usando um e-mail @modalgr';

        const senhaInsegura = verificacaoSenhaSegura(senha);
        if(typeof senhaInsegura === 'string') return senhaInsegura;

        usuarios.push(new Usuario(login, senha));
        return 'Usuário cadastrado com sucesso!';
}
