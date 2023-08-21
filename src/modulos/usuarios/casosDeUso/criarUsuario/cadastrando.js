import { usuarios } from "../../../../banco/usuarios";

function verificandoExistenciaUsuario(usuario) {
        const usuarioExiste = usuarios.find((item) => item["usuario"].includes(usuario));
        if(!usuarioExiste) return false;
       
        return true;
}

function cadastrar() {

}

export default all

