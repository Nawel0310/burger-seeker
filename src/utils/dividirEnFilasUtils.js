export const dividirEnFilas = (comidas, tamanoFila)=>{
    const filas = [];
    for (let i=0; i<comidas.length; i+= tamanoFila){
        filas.push(comidas.slice(i,i+tamanoFila));
    }
    return filas;
}
