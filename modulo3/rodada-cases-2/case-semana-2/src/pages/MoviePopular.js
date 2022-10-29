import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import request from "../services/api";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./MovieGrid.css";
import "./Movie.css"

const API_KEY = "api_key=0ece83219b48ac01b14b9c990a574227";

const MoviePopular = () => {
  const [mPopular, setPopular] = useState([]);

  const [page, setPage] = useState(1);

  const pagP = () => {
    setPage(page + 1);
  };

  const pagN = () => {
    setPage(page - 1);
  };

  const getPopularMovies = () => {
    request
      .get(`movie/popular?${API_KEY}&language=pt-BR&page=${page}`)
      .then((res) => {
        setPopular(res.data.results);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  useEffect(getPopularMovies, [page]);

  return (
    <div className="container">
      <h2 className="title">Filmes populares:</h2>
      <div className="movies-container">
        {mPopular.length === 0 && <p>loading...</p>}
        {mPopular.length > 0 &&
          mPopular.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className="page">
      <button onClick={pagN}><GoArrowLeft/></button>
      <button onClick={pagP}><GoArrowRight/></button>
      </div>
    </div>
  );
};

export default MoviePopular;
