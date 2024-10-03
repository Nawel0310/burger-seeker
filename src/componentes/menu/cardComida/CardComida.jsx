import BotonEditar from "../botones/botonEditar/botonEditar"
import BotonEliminar from "../botones/botonEliminar/botonEliminar"
import './CardComidaStyles.css'



const CardComida = ({comida, onEliminarComida, onEditarComida}) => {

    const handleEliminarComida=()=>{
        if (window.confirm(`¿Está seguro que desea eliminar "${comida.nombre}"?`)){
            onEliminarComida(comida.id);
        }
    }

    return (
        <div class="col col-card-menu">
            <div class="card border-warning card-menu" data-bs-theme="dark">
                <div class="card-body card-menu-body">
                    <div class="d-flex justify-content-center">
                        <img class="imagen-card-comida" src={`data:${comida.imagenDTO.tipo};base64,${comida.imagenDTO.datos}`} alt={comida.nombre} /></div>
                    <h2 class="card-title titulo card-menu-titulo">{comida.nombre}</h2>
                    <h4 class="card-subtitle mb-2 subtitulo menu-card-subtitulo">${comida.precio}</h4>
                    <p class="card-text parrafo">{comida.descripcion}</p>
                    <div class="d-flex flex-row justify-content-evenly">
                        <BotonEditar onEditarComidaBtn={onEditarComida}></BotonEditar>
                        <BotonEliminar onEliminarComidaBtn={handleEliminarComida}></BotonEliminar>
                        </div>
                </div>
            </div>
        </div>)
}

export default CardComida