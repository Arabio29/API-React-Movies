import pelicula from "../img/pelicula.png"

export function getMovieImg(path, width){
    return path? `https://image.tmdb.org/t/p/w${width}${path}`:pelicula
}

/*const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;*/