import BotonEditar from "../botones/botonEditar/botonEditar"
import BotonEliminar from "../botones/botonEliminar/botonEliminar"
import './CardComidaStyles.css'



const CardComida = ({comida,tipoComida, onEliminarComida, onEditarComida,...props}) => {

    const handleEliminarComida=()=>{
        if (window.confirm(`¿Está seguro que desea eliminar "${comida.nombre}"?`)){
            onEliminarComida(comida.id);
        }
    }

    const handleEditarComida = () =>{
        onEditarComida(comida);
    }

    const obtenerClaseImagen = () => {
      if (tipoComida == 'bebida') {
            return "imagen-card-bebida";
        }
        else{
            return "imagen-card-comida"; // Clase por defecto en caso de otros tipos
        }
    };

    return (
        <div class="col col-card-menu" {...props}>
            <div class="card border-warning card-menu" data-bs-theme="dark">
                <div class="card-body card-menu-body">
                    <div class="d-flex justify-content-center">

                        {comida.imagenDTO && (
                            <img
                                className={obtenerClaseImagen()}
                                src={`data:${comida.imagenDTO.tipo};base64,${comida.imagenDTO.datos}`}
                                alt={comida.nombre}
                            />
                        )}

                        </div>
                    <h2 class="card-title titulo card-menu-titulo">{comida.nombre}</h2>
                    
                    <h4 class="card-subtitle mb-2 subtitulo menu-card-subtitulo">${comida.precio}</h4>
                    <p class="card-text parrafo">{comida.descripcion}</p>
                    <div class="d-flex flex-row justify-content-evenly">
                        <BotonEditar onEditarComidaBtn={handleEditarComida}></BotonEditar>
                        <BotonEliminar onEliminarComidaBtn={handleEliminarComida}></BotonEliminar>
                    </div>
                </div>
            </div>
        </div>)
}

export default CardComida