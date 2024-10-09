import './ubicacionStyles.css'


const Ubicacion = () => {

    return (
        <section id="ubicaciones" className="d-flex flex-row justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div id="col-ubicacion" className="col-md-12">
                        <h1 id="titulo-ubicaciones" className="titulo">Nuestra Ubicación</h1>
                        <h5 id="subtitulo-ubicaciones" className="subtitulo">¡Descubre cómo llegar y visítanos hoy!</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                    <iframe 
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4644.317894857162!2d-58.3835498251684!3d-34.60343633993252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1728494225727!5m2!1ses!2sar&z=18" 
                    width="100%" height="450" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                    </div>
                </div>
            </div>
        </section>)
}

export default Ubicacion;