export const comidaSubmit = async (comidaDTO,tipoComida,onComidaCargada) => {

    //Determinamos la URL a enviar según el tipo de comida.
    let url = '';
    switch (tipoComida) {
        case '1':
            url = '/menu/hamburguesas';
            break;
        case '2':
            url = '/menu/bebidas';
            break;
        case '3':
            url = '/menu/postres';
            break;
        default:
            return;
    }

    //Tratamos de enviar la solicitud con fetch
    try{
        const metodoHTTP= comidaDTO.id? 'PUT' : 'POST';

        const urlFetch = comidaDTO.id
        ? `http://localhost:8080${url}/${comidaDTO.id}` // Actualiza la comida con el ID
        : `http://localhost:8080${url}`; // Crea una nueva comida

        const response = await fetch (urlFetch,{
            method: metodoHTTP,
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(comidaDTO),
        });

        if (response.ok){
            window.alert('Comida guardada con éxito');
            onComidaCargada();//función para actualizar comidas
        }
        else{
            window.alert('Error al guardar la comida en la solicitud');
        }

    } catch(error){
        window.alert('Error al guardar la comida');
    }
};