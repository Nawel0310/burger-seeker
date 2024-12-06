import './loginStyles.css'


const Login = () =>{

    return (
        <section id="login-section" class="position-relative py-4 py-xl-5">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 col-xl-6 text-center mx-auto">
                    <h1 id="titulo-login" class="text-uppercase titulo">Iniciar Sesión</h1>
                    <h4 id="subtitulo-login" class="subtitulo">Inicie sesión para poder editar el menú.</h4>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-5" data-bs-theme="dark">
                        <div class="card-body d-flex flex-column align-items-center subtitulo">
                            <div id="login-circle" class="d-flex flex-row justify-content-center align-items-center align-content-center"><svg id="icon-login" class="bi bi-person" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                                </svg></div>
                            <form class="text-center" method="post">
                                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
                                <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Contraseña" /></div>
                                <div class="mb-3"><button class="btn btn-warning text-capitalize d-block w-100 parrafo btn-generico btn-degradado" type="submit">iniciar sesión</button>
                                    <a class="link-sign-in" href="/password-forget">
                                        <p class="text-muted link-sign-in">¿Olvidó su contraseña?</p>
                                    </a><a class="link-sign-in" href="/register">
                                        <p class="text-muted link-sign-in">Regístrese aquí</p>
                                    </a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Login