import axios from "axios";

const HAMBURGUESA_REST_API_URL="http://localhost:8080/menu/hamburguesas";

class HamburguesaService{
    getAllComidas(){
        return axios.get(HAMBURGUESA_REST_API_URL);
    }

    createComida(comida){
        return axios.post(HAMBURGUESA_REST_API_URL,comida);
    }

    getComidaById(comidaId){
        return axios.get(HAMBURGUESA_REST_API_URL+'/'+comidaId);
    }

    updateComida(comida,comidaId){
        return axios.put(HAMBURGUESA_REST_API_URL+'/'+comidaId,comida);
    }

    deleteComida(comidaId){
        return axios.delete(HAMBURGUESA_REST_API_URL+'/'+comidaId);
    }

}


export default new HamburguesaService();