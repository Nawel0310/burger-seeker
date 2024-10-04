import './modalFormStyles.css'
import React, {useState,useEffect} from 'react';


const ModalForm=({comida,onComidaCargada})=>{

    // Si comida está definida, usamos sus datos, sino se deja valores por defecto
    const [nombre, setNombre] = useState(comida ? comida.nombre : '');
    const [descripcion, setDescripcion] = useState(comida ? comida.descripcion : '');
    const [precio, setPrecio] = useState(comida ? comida.precio : 0);
    const [imagen, setImagen] = useState(null);
    const [tipoComida, setTipoComida] = useState('1');


    //Función para comprimir la imagen:
    const getImagenBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
    
                    // Redimensionar la imagen
                    const maxWidth = 480; // Ajusta este valor según lo que necesites
                    const maxHeight = 480; // Ajusta este valor según lo que necesites
                    let width = img.width;
                    let height = img.height;
    
                    // Mantener la relación de aspecto
                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }
    
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
    
                    // Convertir a base64 y comprimir la imagen a JPEG
                    canvas.toBlob((blob) => {
                        const readerBlob = new FileReader();
                        readerBlob.onloadend = () => {
                            const base64data = readerBlob.result.split(',')[1];
                            resolve(base64data);
                        };
                        blob && readerBlob.readAsDataURL(blob);
                    }, 'image/png', 1); // 0.8 es la calidad de compresión (0 a 1)
                };
                img.onerror = reject;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };


    //Función para enviar datos al servidor:
    const handleSubmit = async (e) => {
        e.preventDefault();//Evitamos que la función actue por defecto.
  
        //Creamos el DTO de comida
        const comidaDTO = {
            nombre,
            descripcion,
            precio,
            imagenDTO :{
                nombre: imagen.name,
                tipo: 'image/png',
                datos: await getImagenBase64(imagen), //Comprimimos la imagen
            }
        };

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
            let urlFetch = 'http://localhost:8080'+ url;

            const response = await fetch (urlFetch,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(comidaDTO),
            });

            if (response.ok){
                window.alert('Comida guardada con éxito');
                onComidaCargada();
            }
            else{
                window.alert('Error al guardar la comida en la solicitud');
            }

        } catch(error){
            window.alert('Error al guardar la comida');
        }
    };

    //Cada vez que se produce un cambio en comida, se actualiza dicho cambio
    useEffect(() => {
        if (comida) {
            setNombre(comida.nombre);
            setDescripcion(comida.descripcion);
            setPrecio(comida.precio);
        }
    }, [comida]);


    return(
        <div
        className="modal fade"
        id="modalForm"
        tabIndex="-1"
        aria-labelledby="titulo-modal"
        aria-hidden="true"
        data-bs-theme="dark"
    >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 id="titulo-modal" className="modal-title subtitulo">Cargar comida</h4>
                    <button
                        className="btn-close"
                        type="button"
                        aria-label="Close"
                        data-bs-dismiss="modal"
                    ></button>
                </div>
                <div className="modal-body subtitulo">
                    <form onSubmit={handleSubmit}>
                        <div className="label-div">
                            <label className="form-label titulo-label">Nombre:</label>
                            <input className="form-control" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Descripción:</label>
                            <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Precio:</label>
                            <input className="form-control" type="number" min="0" step="0.01" value={precio} onChange={(e) => setPrecio(parseFloat(e.target.value))} required/>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Imagen:</label>
                            <input className="form-control img-input" type="file" onChange={(e) =>  setImagen(e.target.files[0])} required/>
                        </div>
                        <div className="label-div">
                            <label className="form-label titulo-label">Comida a cargar:</label>
                            <select className="form-select" value={tipoComida} onChange={(e) => setTipoComida(e.target.value)}>
                                <option value="1" selected>Hamburguesa</option>
                                <option value="2">Bebida</option>
                                <option value="3">Postre</option>
                            </select>
                        </div>
                        <div className="d-flex flex-row justify-content-end align-content-center">
                            <button className="btn btn-outline-warning btn-generico parrafo btn-modal" type="button" data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-warning btn-generico btn-degradado parrafo btn-modal"  type="submit" data-bs-dismiss="modal">Cargar Comida </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
};


export default ModalForm;