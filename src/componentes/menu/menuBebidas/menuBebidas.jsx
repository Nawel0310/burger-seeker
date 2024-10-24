import React, {useState,useEffect} from "react";
import BotonAgregar from '../botones/botonAgregar/botonAgregar';
import ModalForm from '../../modalForm/modalForm';
import CardComida from '../cardComida/CardComida';
import { dividirEnFilas } from "../../../utils/dividirEnFilasUtils";
import BebidaService from "../../../services/BebidaService";
import '../menuComidaStyles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuBebidas = () =>{

    const [bebidas,setBebidas] = useState([]);
    const [error, setError] = useState(null);
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);
    const tipoComida = 'bebida'


    const agregarNuevaComida = () => {
        setComidaSeleccionada(null); // Resetea el valor al hacer clic en "Agregar"
    };

   
    const obtenerBebidas = async () => {
        BebidaService.getAllComidas().then(response => {
            setBebidas(response.data);
        }).catch(error => {
            console.log(error);
        })
   
    };

   
    const eliminarBebida = async (id) => {
        BebidaService.deleteComida(id).then(() => {
            setBebidas(bebidas.filter(comida => comida.id !== id));
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
        obtenerBebidas();
    },[])



    return (
        <section id="seccionMenu" className="d-flex flex-column justify-content-start align-content-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10 col-menu">
                    <h1 id="titulo-menu" className="titulo">Menú - Bebidas</h1>
                    <h5 id="subtitulo-menu" className="subtitulo">Explora el catálogo de nuestras bebidas.</h5>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2 d-flex flex-row justify-content-center align-items-center align-content-center col-botones">
                    <div>
                    <BotonAgregar onAgregar={agregarNuevaComida} tipoComida= {tipoComida}></BotonAgregar>
                    <ModalForm comida={comidaSeleccionada} onComidaCargada={obtenerBebidas} tipoComida= {tipoComida}></ModalForm>
                    </div>
                </div>
            </div>
                {dividirEnFilas(bebidas, 3).map((fila, filaIndex) => (
                    <div className="row row-comidas" key={filaIndex}>
                        {fila.map((bebida, index) => (
                            <CardComida 
                            key={index} 
                            comida={bebida}
                            tipoComida={tipoComida}
                            onEliminarComida={eliminarBebida} 
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

export default MenuBebidas;