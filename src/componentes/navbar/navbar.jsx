import {Link} from 'react-router-dom';
import brandLogo from '../../assets/burgerSeekerLogo2.svg';

const Navbar = () =>{
    
    return(
        <nav id="navbar" className="navbar navbar-expand-lg sticky-top bg-body py-3" data-bs-theme="dark">
    <div className="container">
        <a className="navbar-brand d-flex align-items-center" to="#"><span>
            <img id="brandLogo" src={brandLogo} alt="Logo" />
            </span></a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div id="navcol-1" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item d-flex flex-column justify-content-center"><Link className="nav-link fs-5 navbar-item" to="/">Inicio</Link></li>
                <li className="nav-item d-flex flex-column justify-content-center"><Link className="nav-link fs-5 navbar-item" to="/sobre-nosotros">Sobre Nosotros</Link></li>
                <li className="nav-item d-flex flex-column justify-content-center">
                    <div className="nav-item dropdown navbar-item">
                        <a id="dropdown-navbar" className="dropdown-toggle fs-5 navbar-item" aria-expanded="false" data-bs-toggle="dropdown" href="#">Menú</a>
                        <div id="dropdown-menu-background" className="dropdown-menu">
                            <Link className="dropdown-item fs-5 navbar-item menu-item" to="/menu-hamburguesas">Menú Hamburguesas</Link>
                            <Link className="dropdown-item fs-5 navbar-item menu-item" to="/menu-bebida">Menú Bebidas</Link>
                            <Link className="dropdown-item fs-5 navbar-item menu-item" to="/menu-otros">Menú Otros</Link></div>
                    </div>
                </li>
                <li className="nav-item d-flex flex-column justify-content-center"><Link className="nav-link fs-5 navbar-item" to="/ubicaciones">Ubicaciones</Link></li>
                <li className="nav-item d-flex flex-column justify-content-center"><Link className="nav-link fs-5 navbar-item" to="/contacto">Contacto</Link></li>
            </ul>
            <Link className="btn parrafo btn-generico btn-degradado" role="button" to="/ordenar">Ordenar</Link>
        </div>
    </div>
</nav>
    );
};

export default Navbar;