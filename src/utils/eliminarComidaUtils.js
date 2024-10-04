export const eliminarComida = async (id, comida) => {

        const response = await fetch(`http://localhost:8080/menu/${comida}/${id}`,
            { method: 'DELETE' });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

};
