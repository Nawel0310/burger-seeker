import axios from "axios";

const BEBIDA_REST_API_URL="http://localhost:8080/menu/bebidas";

class BebidaService{
    getAllComidas(){
        return axios.get(BEBIDA_REST_API_URL);
    }

    createComida(comida){
        return axios.post(BEBIDA_REST_API_URL,comida);
    }

    getComidaById(comidaId){
        return axios.get(BEBIDA_REST_API_URL+'/'+comidaId);
    }

    updateComida(comida,comidaId){
        return axios.put(BEBIDA_REST_API_URL+'/'+comidaId,comida);
    }

    deleteComida(comidaId){
        return axios.delete(BEBIDA_REST_API_URL+'/'+comidaId);
    }

}


export default new BebidaService();