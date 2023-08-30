import { useState } from "react"
import { useEffect} from "react"
import { get} from "../data/httpClient"
import {MovieCard} from "../components/MovieCard"
import "../components/ContexMovieCard.css"



export function ContexMovieCard(){
    const [movies, setMovies] =useState([]); 
    useEffect(() => {
        get("/discover/movie").then((data)=> {
            setMovies(data.results);
            console.log(data)
        });

    }, []);
       
    return(<ul className="container">
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>)
}



