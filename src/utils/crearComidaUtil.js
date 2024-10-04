import { getImagenBase64 } from "./imageUtils";

export const crearComidaDTO = async (nombre, descripcion, precio, imagen, comida) => {
    const comidaDTO = {
        nombre,
        descripcion,
        precio,
        imagenDTO: {
            nombre: imagen.name,
            tipo: 'image/png',
            datos: await getImagenBase64(imagen), // Comprimimos la imagen
        }
    };

    //Verifico si la comida ya existe, si es el caso, el DTO que devuelvo posee ID
    if (comida && comida.id) {
        comidaDTO.id = comida.id;
    }

    return comidaDTO;
};
