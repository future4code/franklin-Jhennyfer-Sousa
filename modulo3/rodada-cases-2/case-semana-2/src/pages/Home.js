import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MovieGrid.css'

/* const MOVIES_URL =  process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY; */

const MOVIES_URL =  "https://api.themoviedb.org/3/movie/"
const API_KEY = "api_key=0ece83219b48ac01b14b9c990a574227"

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results)
  };

  useEffect(() => {
    const topRatedUrl = `${MOVIES_URL}top_rated?${API_KEY}`;
    console.log(topRatedUrl)
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="movies-container">
        {topMovies.length === 0 && <p>loading...</p>}
        {topMovies.length > 0 &&
      topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  );
};

export default Home;
