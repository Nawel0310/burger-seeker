import React,{useState,useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'bootstrap/js/src/carousel';
import './aboutUsStyles.css'


const Carrusel = () => {

    //Definimos hamburguesas y su función de estado
    const [hamburguesas,setHamburguesas] = useState([]);
    const carouselRef = useRef(null);

    const obtenerHamburguesas=async()=>{
        try{
            const response = await fetch('http://localhost:8080/menu/hamburguesas');
            //Obtenemos el json de la respuesta
            const data = await response.json();
            //Seteamos el estado de hamburguesas, con las primeras 3 obtenidas
            setHamburguesas(data.slice(0,3));

        }catch(error){
            window.alert('Error al obtener hamburguesas');
        }
    }


    //Realizamos la solicitud apenas se renderiza el componente!
    useEffect(() => {
        obtenerHamburguesas();
    }, []);

    // y en tu useEffect
    useEffect(() => {
        if (carouselRef.current) {
            const carousel = new Carousel(carouselRef.current, {
                interval: 3000,
                ride: 'carousel',
            });
            return () => {
                carousel.dispose(); // Limpia el carrusel al desmontar
            };
        }
    }, [hamburguesas]);



    return (
        <div class="p-xl-5 m-xl-5">
            <div ref={carouselRef} id="carrusel-about-us" class="carousel slide carousel-fade d-flex justify-content-center align-items-center align-content-center" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3000">
                <div class="carousel-inner">
                    {hamburguesas.map((hamburguesa, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={hamburguesa.id}>
                            {hamburguesa.imagenDTO && (
                                <img
                                    className="imagen-card-comida"
                                    src={`data:${hamburguesa.imagenDTO.tipo};base64,${hamburguesa.imagenDTO.datos}`}
                                    alt={hamburguesa.nombre}
                                />
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Carrusel;