import React,{useEffect, useState} from 'react';

const ModalAvisoNavbar=()=>{

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        // Función para mostrar el modal si la resolución es menor o igual a 991px
        const mostrarModal = () => {
            if (window.innerWidth <= 991) {
                if (!sessionStorage.getItem("modalShown")) {
                    setShowModal(true); // Mostramos el modal
                    sessionStorage.setItem("modalShown", "true"); // Marcamos que ya fue mostrado
                }
            }
        };

        mostrarModal();

        //Para mostrar el modal al cambiar el tamaño de la pestaña
        window.addEventListener("resize", mostrarModal);

        return () => window.removeEventListener("resize", mostrarModal);

    }, []);


    const handleClose = () => {
        setShowModal(false); // Ocultar modal
      };

    return (
        <>
            {showModal && (
                <div
                    id="modal-aviso-navbar"
                    className="modal fade show"
                    role="dialog"
                    tabIndex="-1"
                    style={{display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)"}}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div id="modal-cuerpo" className="modal-body">
                                <div className="d-flex flex-row justify-content-end align-items-center">
                                    <button
                                        className="btn-close btn-close-white"
                                        type="button"
                                        aria-label="Close"
                                        onClick={handleClose}
                                    ></button>
                                </div>
                                <p id="desc-modal" className="subtitulo">
                                    ¡Recuerda que puedes navegar desde el menú con el botón &quot;
                                    <svg
                                        className="icon icon-tabler icon-tabler-baseline-density-medium"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 20h16"></path>
                                        <path d="M4 12h16"></path>
                                        <path d="M4 4h16"></path>
                                    </svg>
                                    &quot; !
                                </p>
                                <div className="d-flex flex-row justify-content-end align-items-center">
                                    <button
                                        className="btn btn-light btn-degradado btn-generico parrafo"
                                        type="button"
                                        onClick={handleClose}
                                    >
                                        ¡Entendido!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}

export default ModalAvisoNavbar;