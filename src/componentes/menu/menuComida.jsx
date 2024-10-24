import React, {useState,useEffect} from "react";
import BotonAgregar from './botones/botonAgregar/botonAgregar';
import ModalForm from './../modalForm/modalForm';
import CardComida from './cardComida/CardComida';
import { dividirEnFilas } from "./../../utils/dividirEnFilasUtils";
import HamburguesaService from "./../../services/HamburguesaService";
import './menuComidaStyles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MenuComida =(titulo,subtitulo,comidas, agregarNuevaComida,comidaSeleccionada,obtenerComidas,eliminarComida,seleccionarComidaParaEditar)=>{

    return (
    <section id="seccionMenu" className="d-flex flex-column justify-content-start align-content-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10 col-menu">
                    <h1 id="titulo-menu" className="titulo">{titulo}</h1>
                    <h5 id="subtitulo-menu" className="subtitulo">{subtitulo}</h5>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2 d-flex flex-row justify-content-center align-items-center align-content-center col-botones">
                    <div>
                    <BotonAgregar onAgregar={agregarNuevaComida}></BotonAgregar>
                    <ModalForm comida={comidaSeleccionada} onComidaCargada={obtenerComidas}></ModalForm>
                    </div>
                </div>
            </div>
                {dividirEnFilas(comidas, 3).map((fila, filaIndex) => (
                    <div className="row row-comidas" key={filaIndex}>
                        {fila.map((comida, index) => (
                            <CardComida 
                            key={index} 
                            comida={comida} 
                            onEliminarComida={eliminarComida} 
                            onEditarComida={seleccionarComidaParaEditar}
                            data-aos="fade-up"   
                            data-aos-delay={`${index * 100}`}
                            />))
                            }
                            
                            
                    </div>
            ))}
        </div>
    </section>)

}

export default MenuComida;
