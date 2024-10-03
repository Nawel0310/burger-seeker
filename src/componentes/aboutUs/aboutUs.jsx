import fastFood from '../../assets/fastfood_24dp_FFDB00_FILL0_wght400_GRAD0_opsz24.svg'
import reviews from '../../assets/reviews_24dp_FFDB00_FILL0_wght400_GRAD0_opsz24.svg'
import star from '../../assets/star_24dp_FFDB00_FILL0_wght400_GRAD0_opsz24.svg'
import Carrusel from './carrusel'

import './aboutUsStyles.css'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AboutUs = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <section id="seccionAboutUs">
            <div className="container py-4 py-xl-5">
                <div className="row gy-4 gy-md-0">
                    <div className="col-md-6 d-md-flex align-items-md-center">
                        <div id="div-about-us">
                            <h2 data-aos="fade-down" data-aos-duration="750"  id="tituloAboutUs" className="text-uppercase fw-bold titulo">Un poco <br />sobre nosotros</h2>
                            <p className="my-3 subtitulo subtitulo-about-us">Nos ocupamos de cubrir todos los aspectos que consideramos fundamentales para una experiencia memorable en nuestro local</p>
                            
                            <div data-aos="fade-right" data-aos-duration="750"  className="d-flex flex-row flex-grow-0 align-items-center align-content-center list-item"><img className="img-icon-about-us" src={fastFood} />
                                <p className="subtitulo subtitulo-about-us parrafo-about-us"><span>Comida fresca y de calidad, para la mejor combinación de sabores.</span></p>
                            </div>

                            <div data-aos="fade-right" data-aos-duration="950" className="d-flex flex-row flex-grow-0 align-items-center align-content-center list-item"><img className="img-icon-about-us" src={reviews} />
                                <p className="subtitulo subtitulo-about-us parrafo-about-us">Reseñas que avalan nuestro excelente servicio y trato excepcional.</p>
                            </div>

                            <div data-aos="fade-right" data-aos-duration="1150" className="d-flex flex-row flex-grow-0 align-items-center align-content-center list-item"><img className="img-icon-about-us" src={star} />
                                <p className="subtitulo subtitulo-about-us parrafo-about-us">Promociones únicas llenas de combos irresistibles y descuentos imperdibles.</p>
                            </div>

                            <h5 data-aos="fade-up" data-aos-duration="750" id="visita-redes-heading" className="subtitulo subtitulo-about-us"><span style={{color: "rgb(235, 233, 252)"}}>¡Visita </span><a id="link-about-us-heading" href="https://www.instagram.com/zark.barbaro/" target="_blank"><strong>nuestras redes</strong></a><span style={{color: "rgb(235, 233, 252)"}}> para estar al tanto!</span></h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center align-content-center">
                        <Carrusel/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;