import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './componentes/navbar/navbar';
import Hero from './componentes/hero/hero';
import Footer from './componentes/footer/footer';
import ModalAvisoNavbar from './componentes/modalAvisoNavbar/modalAvisoNavbar';
import AboutUs from './componentes/aboutUs/aboutUs';
import MenuHamburguesas from './componentes/menu/menuHamburguesas/menuHamburguesas';
import MenuBebidas from './componentes/menu/menuBebidas/menuBebidas';
import MenuPostres from './componentes/menu/menuPostres/menuPostres';
import Ubicacion from './componentes/ubicacion/ubicacion';
import Contacto from './componentes/contacto/contacto';

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
        <Route path="menu-bebidas" element={<MenuBebidas/>}/>
        <Route path="menu-postres" element={<MenuPostres/>}/>
        <Route path="/ubicacion" element={<Ubicacion/>}/>
        <Route path ="/contacto" element={<Contacto/>}/>

      </Routes>

      <Footer/>
    </Router>
  );
};

export default App;
