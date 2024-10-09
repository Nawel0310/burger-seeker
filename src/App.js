import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './componentes/navbar/navbar';
import Hero from './componentes/hero/hero';
import Footer from './componentes/footer/footer';
import ModalAvisoNavbar from './componentes/modalAvisoNavbar/modalAvisoNavbar';
import AboutUs from './componentes/aboutUs/aboutUs';
import MenuHamburguesas from './componentes/menu/menuHamburguesas/menuHamburguesas';
import Ubicacion from './componentes/ubicacion/ubicacion';

//Siempre importar estos al final, en este orden!
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navbar/>

      <ModalAvisoNavbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path ="/sobre-nosotros"  element={<AboutUs/>}/>
        <Route path="menu-hamburguesas" element={<MenuHamburguesas/>}/>
        <Route path="/ubicaciones" element={<Ubicacion/>}/>

      </Routes>

      <Footer/>
    </Router>
  );
};

export default App;
