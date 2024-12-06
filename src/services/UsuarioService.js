import axios from "axios";

const USUARIO_REST_API_URL="http://localhost:8080/usuarios";

class UsuarioService{

    createUsuario(usuario){
        return axios.post(USUARIO_REST_API_URL,usuario)
    }

}

export default new UsuarioService();