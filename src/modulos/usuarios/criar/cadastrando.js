import { usuarios } from "../../../banco/usuarios.js";

function verificandoExistenciaUsuario(usuario) {
        const usuarioExiste = usuarios.find((item) => item["usuario"].includes(usuario));
        if(!usuarioExiste) return false;
       
        return true;
}

export function cadastrarUsuario() {

}
