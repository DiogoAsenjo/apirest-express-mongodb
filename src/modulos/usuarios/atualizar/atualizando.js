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

export function atualizarSenha(usuario, senhaAntiga, senhaNova) {
        const usuarioExistente = usuarios.find((item) => item["usuario"] === usuario);
        if(!usuarioExistente) return 'Usuário não existe, digite um usuário válido!';

        const posicaoUsuario = usuarios.findIndex((item) => item.usuario === usuario);
        const senhaCorreta = usuarios[posicaoUsuario].senha === senhaAntiga;
        if(!senhaCorreta) return 'Senha antiga está incorreta, digite novamente!';
        
        const senhaInsegura = verificacaoSenhaSegura(senhaNova);
        if(typeof senhaInsegura === 'string') return senhaInsegura;

        if(senhaNova === senhaAntiga) return 'A senha nova não pode ser igual a antiga!';

        usuarioExistente.senha = senhaNova;
        return 'Senha alterada com sucesso!'
}