import './botonEliminarStyles.css'

const BotonEliminar= ({onEliminarComidaBtn}) => {

    return(
        <button 
        class="btn btn-danger d-flex flex-row justify-content-center align-items-center btn-generico parrafo btn-eliminar" 
        type="submit"
        onClick={onEliminarComidaBtn}
        >Eliminar <i class="fa fa-trash"></i>
        </button>
    )

}

export default BotonEliminar