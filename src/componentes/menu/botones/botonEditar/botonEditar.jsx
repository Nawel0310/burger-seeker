import './botonEditarStyles.css'

const BotonEditar= ({onEditarComidaBtn}) => {

    return(
        <button class="btn btn-primary d-flex flex-row justify-content-center align-items-center btn-generico parrafo btn-editar" 
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#modalForm"
        onClick={onEditarComidaBtn}
        >Editar <i class="fa fa-edit"></i></button>
    )

}

export default BotonEditar