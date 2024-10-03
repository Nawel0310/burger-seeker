import {Link} from 'react-router-dom';
import trioHamburguesas from '../../assets/hamburguesaTrio3.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () =>{

    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section id="hero">
            <div className="container py-4 py-xl-5">
                <div className="row gy-4 gy-md-0">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 d-md-flex align-items-md-center">
                        <div id="introHero">
                            <h2 data-aos="fade-down" data-aos-duration="750" id="titulo-hero" className="text-uppercase fw-bold titulo">Hamburguesas únicas para <br />gente única</h2>
                            <p data-aos="fade-right" data-aos-duration="1000" id="subtitulo-hero" className="my-3 subtitulo">En Burger Seeker preparamos hamburguesas artesanales, hechas a mano con ingredientes frescos, pasión y dedicación.<br />¿Qué esperas para probar la mejor comida, hecha especialmente para ti?</p>
                            <Link className="btn btn-lg fw-normal me-2 parrafo btn-generico btn-degradado btn-hero" role="button" to="/menu-comida"><strong>Explora el Menú</strong></Link>
                            <Link className="btn btn-outline-warning btn-lg parrafo btn-generico btn-sin-fondo btn-hero" role="button" to="/ordenar">Ordenar Ya!</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6">
                        <img data-aos="fade-left" data-aos-duration="1250" className="img-fluid imagen-hero" src={trioHamburguesas} />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;