import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [overview, setOverview] = useState("");
  const [generos, setGeneros] = useState({});

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setOverview(data.overview);
      setGeneros(data.genres[0]);
      console.log(data);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 300);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} 
      className="col movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Sinopsis: </strong>
          {overview}
        </p>
      </div>
    </div>
  );
}
