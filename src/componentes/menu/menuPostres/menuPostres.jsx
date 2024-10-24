import React, {useState,useEffect} from "react";
import BotonAgregar from '../botones/botonAgregar/botonAgregar';
import ModalForm from '../../modalForm/modalForm';
import CardComida from '../cardComida/CardComida';
import { dividirEnFilas } from "../../../utils/dividirEnFilasUtils";
import PostreService from "../../../services/PostreService";
import '../menuComidaStyles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuPostres = () =>{

    const [postres,setPostres] = useState([]);
    const [error, setError] = useState(null);
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);
    const tipoComida = 'postre'


    const agregarNuevaComida = () => {
        setComidaSeleccionada(null); // Resetea el valor al hacer clic en "Agregar"
    };

   
    const obtenerPostres = async () => {
        PostreService.getAllComidas().then(response => {
            setPostres(response.data);
        }).catch(error => {
            console.log(error);
        })
   
    };

   

    const eliminarPostre = async (id) => {
        PostreService.deleteComida(id).then(() => {
            setPostres(postres.filter(comida => comida.id !== id));
        }).catch(error => {
            window.alert('Error al eliminar la comida');
        })
    };

    const seleccionarComidaParaEditar = (comida)=>{
        setComidaSeleccionada(comida);
    };

    //Usamos useEffect para actualizar el estado del componente cuando este se renderiza
    useEffect(() => {

        AOS.init({
            duration: 1000, // Duración de la animación en milisegundos
        });
        obtenerPostres();
    },[])



    return (
        <section id="seccionMenu" className="d-flex flex-column justify-content-start align-content-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10 col-menu">
                    <h1 id="titulo-menu" className="titulo">Menú - Postres</h1>
                    <h5 id="subtitulo-menu" className="subtitulo">Disfruta de la dulce variedad de nuestros postres.</h5>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2 d-flex flex-row justify-content-center align-items-center align-content-center col-botones">
                    <div>
                    <BotonAgregar onAgregar={agregarNuevaComida} tipoComida= {tipoComida}></BotonAgregar>
                    <ModalForm comida={comidaSeleccionada} onComidaCargada={obtenerPostres} tipoComida={tipoComida}></ModalForm>
                    </div>
                </div>
            </div>
                {dividirEnFilas(postres, 3).map((fila, filaIndex) => (
                    <div className="row row-comidas" key={filaIndex}>
                        {fila.map((postre, index) => (
                            <CardComida 
                            key={index} 
                            comida={postre}
                            tipoComida={tipoComida}
                            onEliminarComida={eliminarPostre} 
                            onEditarComida={seleccionarComidaParaEditar}
                            data-aos="fade-up"   
                            data-aos-delay={`${index * 100}`}
                            />))
                            }
                            
                            
                    </div>
            ))}
        </div>
    </section>);

};

export default MenuPostres;