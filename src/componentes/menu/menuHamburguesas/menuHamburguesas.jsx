import React, {useState,useEffect} from "react";
import BotonAgregar from '../botones/botonAgregar/botonAgregar';
import ModalForm from '../../modalForm/modalForm';
import CardComida from '../cardComida/CardComida';
import { obtenerComida } from "../../../utils/obtenerComidaUtils";
import { eliminarComida } from "../../../utils/eliminarComidaUtils";
import { dividirEnFilas } from "../../../utils/dividirEnFilasUtils";
import '../menuComidaStyles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuHamburguesas = () =>{

    const [hamburguesas,setHamburguesas] = useState([]);
    const [error, setError] = useState(null);
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);

   
    const obtenerHamburguesas = async () => {
        try {
            const data = await obtenerComida('hamburguesas');
            setHamburguesas(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const eliminarHamburguesa = async (id) => {
        try {
            await eliminarComida(id,'hamburguesas')
            //Actualizamos el estado de hamburguesas.
            setHamburguesas(hamburguesas.filter(comida => comida.id !== id));
        } catch (error) {
            setError('Error al eliminar la comida.')
        }
    };

    const editarHamburguesa = (comida)=>{
        setComidaSeleccionada(comida);
    };

    //Usamos useEffect para actualizar el estado del componente cuando este se renderiza
    useEffect(() => {

        AOS.init({
            duration: 1000, // Duración de la animación en milisegundos
        });
        obtenerHamburguesas();
    },[])


    return (
        <section id="seccionMenu" className="d-flex flex-column justify-content-start align-content-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10 col-menu">
                    <h1 id="titulo-menu" className="titulo">Menú - Hamburguesas</h1>
                    <h5 id="subtitulo-menu" className="subtitulo">Explora nuestras diversas hamburguesas, con sus respectivos precios e ingredientes.</h5>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2 d-flex flex-row justify-content-center align-items-center align-content-center col-botones">
                    <div>
                    <BotonAgregar></BotonAgregar>
                    <ModalForm comida={comidaSeleccionada} onComidaCargada={obtenerHamburguesas}></ModalForm>
                    </div>
                </div>
            </div>
                {dividirEnFilas(hamburguesas, 3).map((fila, filaIndex) => (
                    <div className="row row-comidas" key={filaIndex}>
                        {fila.map((hamburguesa, index) => (
                            <CardComida 
                            key={index} 
                            comida={hamburguesa} 
                            onEliminarComida={eliminarHamburguesa} 
                            onEditarComida={editarHamburguesa}
                            data-aos="fade-up"   
                            data-aos-delay={`${index * 100}`}
                            />))
                            }
                    </div>
            ))}
        </div>
    </section>);

};

export default MenuHamburguesas;