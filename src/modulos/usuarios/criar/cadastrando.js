import { usuarios } from "../../../banco/usuarios.js";

function verificacaoSenhaSegura(senhaVerificada) {
        if(senhaVerificada.length < 8) {
            return `A senha deve ter no mínimo 8 caracteres`; 
        }
        if((!/[a-z]/.test(senhaVerificada))) {
            return `A senha deve ter ao menos uma letra minúscula`;
        }
        if((!/[A-Z]/.test(senhaVerificada))) {
            return `A senha deve ter ao menos uma letra maiúscula`;
        }
        if((!/[0-9]/.test(senhaVerificada))) {
            return `A senha deve ter ao menos um número`;
        }
        if((!/\W/.test(senhaVerificada))) {
            return `A senha deve ter ao menos um caracter especial`;
        }
    
        return true;
    }

export function cadastrarUsuario(usuario, senha) {
        const usuarioExistente = usuarios.find((item) => item["usuario"].includes(usuario));
        const usandoEmailInstitucional = usuario.endsWith("@modalgr.com.br");
        const senhaInsegura = verificacaoSenhaSegura(senha);

        if(usuarioExistente) return 'Usuário já existe';
        if(!usandoEmailInstitucional) return 'É preciso se cadastrar usando um e-mail @modalgr';
        if(typeof senhaInsegura === 'string') return senhaInsegura;
        usuarios.push({usuario, senha});
        return 'Usuário cadastrado com sucesso!'
}
