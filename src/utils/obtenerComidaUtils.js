export const obtenerComida = async (comida) => {

        const response = await fetch(`http://localhost:8080/menu/${comida}`);

        // Verifica si la respuesta es correcta (código de estado 200-299)
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        //Obtenemos el json de la respuesta,
        return await response.json();
        
};