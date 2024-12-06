import './registerStyles.css'
import { crearUsuarioDTO } from '../../utils/crearUsuarioUtil'
import UsuarioService from '../../services/UsuarioService';
import React, {useState,useEffect} from 'react';


const Register = () =>{

    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const handleSubmit = async (e)=>{
        const usuarioDTO = await crearUsuarioDTO(nombre,apellido,email,password)
        UsuarioService.createUsuario(usuarioDTO).then(() => {
            window.alert('Usuario guardado con éxito.');
        }).catch(error => {
            window.alert('Error al guardar el usuario.');
        })

    }

    const resetForm = () => {
        setNombre('');
        setApellido('');
        setEmail('');
        setPassword('');

    };


    const handleButtonClick = async(e) => {
        e.preventDefault(); // Evitar el envío inicial del formulario
        const form = e.target.closest("form"); // Selecciona el formulario más cercano al botón
      
        // Añade la clase de validación de Bootstrap
        form.classList.add("was-validated");
      
        // Verifica si el formulario es válido
        if (form.checkValidity()) {
          handleSubmit(); // Llama a la función de envío personalizada
          resetForm();    // Reinicia el formulario después del envío
          form.classList.remove("was-validated");
        }
      }
      

    return (
        <section id="register-section" class="position-relative py-4 py-xl-5">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
                        <h1 id="titulo-registro" class="text-uppercase titulo">registro</h1>
                        <h4 id="subtitulo-registro" class="subtitulo">Regístrese y espere a que un administrador le otorgue permisos de edición.</h4>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-5" data-bs-theme="dark">
                            <div class="card-body d-flex flex-column align-items-center subtitulo">
                                <form class="text-center" method="post">
                                <div className="d-flex mb-3">
                                        <input className="form-control" type="text" name="nombre" placeholder="Nombre" style={{ marginRight: "0.5rem" }} value={nombre} onChange={(e)=> setNombre(e.target.value)} required />
                                        <input className="form-control" type="text" name="apellido" placeholder="Apellido" style={{ marginLeft: "0.5rem" }} value={apellido} onChange={(e)=> setApellido(e.target.value)} required/>
                                    </div>
                                    <div class="mb-3"></div>
                                    <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/></div>
                                    <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Contraseña" value={password} onChange={(e)=> setPassword(e.target.value)} required/></div>
                                    <div class="mb-3"><button class="btn btn-warning text-capitalize d-block w-100 parrafo btn-generico btn-degradado" type="submit" onClick={(e) => handleButtonClick(e)}>Registrarse</button>
                                    <a class="link-sign-in" href="/password-forget">
                                        <p class="text-muted link-sign-in">¿Olvidó su contraseña?</p>
                                    </a><a class="link-sign-in" href="/login">
                                            <p class="text-muted link-sign-in">¿Ya tiene cuenta? Inicie sesión</p>
                                        </a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register