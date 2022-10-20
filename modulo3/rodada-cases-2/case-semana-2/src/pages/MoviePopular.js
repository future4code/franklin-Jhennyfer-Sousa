import React,{ useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MovieGrid.css'

const MOVIES_URL =  "https://api.themoviedb.org/3/movie/"
const API_KEY = "api_key=0ece83219b48ac01b14b9c990a574227"

const MoviePopular = () => {
    const [mPopular, setPopular] = useState([]);

    const getPopularMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPopular(data.results)
      };
    
      useEffect(() => {
        const popularUrl = `${MOVIES_URL}popular?${API_KEY}`;
        getPopularMovies(popularUrl);
      }, []);
  return (
    <div className="container">
    <h2 className="title">Filmes populares:</h2>
    <div className="movies-container">
    {mPopular.length === 0 && <p>loading...</p>}
    {mPopular.length > 0 &&
  mPopular.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
</div>
  )
}

export default MoviePopular