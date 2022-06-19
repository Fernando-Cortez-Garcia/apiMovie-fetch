const cargarPeliculas = async() => {
    const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=a9f8786373b5ffece405294946395656');
    console.log(respuesta);
}
cargarPeliculas();