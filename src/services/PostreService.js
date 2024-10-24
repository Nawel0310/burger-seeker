import axios from "axios";

const POSTRE_REST_API_URL="http://localhost:8080/menu/postres";

class PostreService{
    getAllComidas(){
        return axios.get(POSTRE_REST_API_URL);
    }

    createComida(comida){
        return axios.post(POSTRE_REST_API_URL,comida);
    }

    getComidaById(comidaId){
        return axios.get(POSTRE_REST_API_URL+'/'+comidaId);
    }

    updateComida(comida,comidaId){
        return axios.put(POSTRE_REST_API_URL+'/'+comidaId,comida);
    }

    deleteComida(comidaId){
        return axios.delete(POSTRE_REST_API_URL+'/'+comidaId);
    }
}

export default new PostreService();