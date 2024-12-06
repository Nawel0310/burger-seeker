import './passwordForgetStyles.css'

const PasswordForget = () =>{

    return (<section id="forget-password-section" class="position-relative py-4 py-xl-5">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 col-xl-6 text-center mx-auto">
                    <h1 id="titulo-forget-password" class="text-uppercase titulo">recuperar contraseña</h1>
                    <h4 id="subtitulo-forget-password" class="subtitulo">¿Olvidó su contraseña? Ingrese su email y le enviaremos un correo recuperar su usuario.</h4>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-5" data-bs-theme="dark">
                        <div class="card-body d-flex flex-column align-items-center subtitulo">
                            <form class="text-center" method="post">
                                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
                                <div class="mb-3"><button class="btn btn-warning text-capitalize d-block w-100 parrafo btn-generico btn-degradado" type="submit">Enviar correo</button>
                                <a class="link-sign-in" href="/register">
                                        <p class="text-muted link-sign-in">Regístrese aquí</p>
                                    </a><a class="link-sign-in" href="/login">
                                        <p class="text-muted link-sign-in">¿Ya tiene cuenta? Inicie sesión</p>
                                    </a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
export default PasswordForget;