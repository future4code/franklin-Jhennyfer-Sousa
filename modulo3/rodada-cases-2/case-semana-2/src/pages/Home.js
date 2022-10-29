import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import request from "../services/api";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./MovieGrid.css";

const API_KEY = "api_key=0ece83219b48ac01b14b9c990a574227";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const [page, setPage] = useState(1);

  const pagP = () => {
    setPage(page + 1);
  };

  const pagN = () => {
    setPage(page - 1);
  };

  const getTopRatedMovies = () => {
    request.get(`movie/top_rated?${API_KEY}&language=pt-BR&page=${page}`)
    .then((res) => {
      setTopMovies(res.data.results)
    }).catch((error) => {
      console.log(error.code)
    })
  };

  useEffect(getTopRatedMovies, [page]);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>loading...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div> 
      <div className="page"> 
      <button onClick={pagN}><GoArrowLeft/></button>
      <button onClick={pagP}><GoArrowRight/></button>
      </div> 
    </div>
  );
};

export default Home;
