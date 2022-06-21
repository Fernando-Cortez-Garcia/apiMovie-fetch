const cargarPeliculas = async() => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=a9f8786373b5ffece40529494695656');
        console.log(respuesta);
        if (respuesta.status == 200) {
            const datos = await respuesta.json();
            console.log(datos.title);
        } else if (respuesta.status == 401) {
            console.log("Error: Llave invalida");
        } else if (respuesta.status == 404) {
            console.log('Error:Pelicula no encontrada');
        }

    } catch (err) {


    }
}


cargarPeliculas();