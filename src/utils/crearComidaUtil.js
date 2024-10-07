import { getImagenBase64 } from "./imageUtils";

export const crearComidaDTO = async (nombre, descripcion, precio, imagen) => {

    const comidaDTO = {
        nombre,
        descripcion,
        precio,
        imagenDTO: imagen ? {
            nombre: imagen.name,
            tipo: 'image/png',
            datos: await getImagenBase64(imagen), // Comprimimos la imagen
        } : null // Si la imagen es null, asignamos null a imagenDTO
    };

    return comidaDTO;
};
