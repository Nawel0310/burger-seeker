import './botonEditarStyles.css'

const BotonEditar= ({comida,onEditarComidaBtn}) => {

    return(
        <button class="btn btn-primary d-flex flex-row justify-content-center align-items-center btn-generico parrafo btn-editar" 
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#modalEdicionForm"
        >Editar <i class="fa fa-edit"></i></button>
    )

}

export default BotonEditar