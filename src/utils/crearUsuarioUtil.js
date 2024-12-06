
export const crearUsuarioDTO = async (nombre, apellido, email, password) => {

    const usuarioDTO = {
        nombre,
        apellido,
        email,
        password
    };

    return usuarioDTO;
};