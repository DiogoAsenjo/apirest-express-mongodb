import { usuarios } from "../../../banco/usuarios.js";

export function deletarUsuario(login, senha) {
        const usuarioExistente = usuarios.find((item) => item["login"] === login);
        if(!usuarioExistente) return 'Usuário não existe, digite um válido!';

        const posicaoUsuario = usuarios.findIndex((item) => item.login === login);
        const senhaCorreta = usuarios[posicaoUsuario].senha === senha;
        if(!senhaCorreta) return 'Senha incorreta, digite novamente!';

        usuarios.splice(posicaoUsuario, 1);
        return 'Usuário deletado com sucesso!';
}