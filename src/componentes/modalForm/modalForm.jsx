import './modalFormStyles.css'
import React, {useState,useEffect} from 'react';
import { crearComidaDTO } from '../../utils/crearComidaUtil';
import HamburguesaService from '../../services/HamburguesaService';
import BebidaService from '../../services/BebidaService';
import PostreService from '../../services/PostreService';

const ModalForm=({comida,tipoComida,onComidaCargada})=>{

    // Si comida está definida, usamos sus datos, sino se deja valores por defecto
    const [nombre, setNombre] = useState(comida ? comida.nombre : '');
    const [descripcion, setDescripcion] = useState(comida ? comida.descripcion : '');
    const [precio, setPrecio] = useState(comida ? comida.precio : 0);
    const [imagen, setImagen] = useState(null);


    //Función para enviar datos al servidor:
    const handleSubmit = async (e) => {
        e.preventDefault();//Evitamos que la función actue por defecto.

        //Creamos el DTO de comida
        const comidaDTO = await crearComidaDTO(nombre, descripcion, precio, imagen)



        switch (tipoComida) {
            //En lugar de usar un switch, puede refactorizarse para que se reciba
            //un parametro "comida" y dicho parametro llame al servicio correspondiente
            //(hamburguesaService y bebidaService pasarian a ser solo "comidaService")
            case 'hamburguesa':
                if (comida) {
                    HamburguesaService.updateComida(comidaDTO, comida.id).then(() => {
                        window.alert('Comida actualizada con éxito');
                        onComidaCargada();//Funcion para actualizar el estado
                    }).catch(error => {
                        window.alert('Error al actualizar la comida');
                    })

                } else {
                    HamburguesaService.createComida(comidaDTO).then(() => {
                        window.alert('Comida guardada con éxito');
                        onComidaCargada();//Funcion para actualizar el estado
                    }).catch(error => {
                        window.alert('Error al guardar la comida');
                    })
                }
                break;

                case 'bebida':
                if (comida) {
                    BebidaService.updateComida(comidaDTO, comida.id).then(() => {
                        window.alert('Comida actualizada con éxito');
                        onComidaCargada();//Funcion para actualizar el estado
                    }).catch(error => {
                        window.alert('Error al actualizar la comida');
                    })

                } else {
                    BebidaService.createComida(comidaDTO).then(() => {
                        window.alert('Comida guardada con éxito');
                        onComidaCargada();//Funcion para actualizar el estado
                    }).catch(error => {
                        window.alert('Error al guardar la comida');
                    })
                }
                break;


                case 'postre':
                if (comida) {
                    PostreService.updateComida(comidaDTO, comida.id).then(() => {
                        window.alert('Comida actualizada con éxito');
                        onComidaCargada();//Funcion para actualizar el estado
                    }).catch(error => {
                        window.alert('Error al actualizar la comida');
                    })

                } else {
                    PostreService.createComida(comidaDTO).then(() => {
                        window.alert('Comida guardada con éxito');
                        onComidaCargada();//Funcion para actualizar el estado
                    }).catch(error => {
                        window.alert('Error al guardar la comida');
                    })
                }
                break;

                default:
                    window.alert('Error, la comida no es valida');
                    break;
    }


    }


    //Cada vez que se produce un cambio en comida, se actualiza dicho cambio
    useEffect(() => {
        if (comida) {
            // Si hay una comida seleccionada (editar)
            setNombre(comida.nombre);
            setDescripcion(comida.descripcion);
            setPrecio(comida.precio);
            setImagen(comida.imagen);
            
        }
        else {
            // Si no hay una comida seleccionada (agregar nueva comida)
            resetForm();
        }
    }, [comida]);

    const title = ()=>{
        if(!comida){
            return <h4 id="titulo-modal" className="modal-title subtitulo">Cargar {tipoComida}</h4>
        }
        else{
            return <h4 id="titulo-modal" className="modal-title subtitulo">Actualizar {tipoComida}</h4>
        }

    }

    //Limpiar los valores del formulario:
    const resetForm = () => {
        setNombre('');
        setDescripcion('');
        setPrecio(0);
        setImagen(null);
    };

    return(
        <div
        className="modal fade"
        id="modalForm"
        tabIndex="-1"
        aria-labelledby="titulo-modal"
        aria-hidden="true"
        data-bs-theme="dark"
    >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <div>{
                        title()
                        }</div>
                    <button
                        className="btn-close"
                        type="button"
                        aria-label="Close"
                        data-bs-dismiss="modal"
                    ></button>
                </div>
                <div className="modal-body subtitulo">
                    <form onSubmit={handleSubmit}>
                        <div className="label-div">
                            <label className="form-label titulo-label">Nombre:</label>
                            <input className="form-control" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Descripción:</label>
                            <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Precio:</label>
                            <input className="form-control" type="number" min="0" step="0.01" value={precio} onChange={(e) => setPrecio(parseFloat(e.target.value))} required/>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Imagen:</label>
                            <input className="form-control img-input" type="file" onChange={(e) =>  setImagen(e.target.files[0])} required/>
                        </div>
                        
                        <div className="d-flex flex-row justify-content-end align-content-center">
                            <button className="btn btn-outline-warning btn-generico parrafo btn-modal" type="button" data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-warning btn-generico btn-degradado parrafo btn-modal"  type="submit" data-bs-dismiss="modal" onClick={(e) => handleSubmit(e) && resetForm()} >Cargar Comida </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default ModalForm;