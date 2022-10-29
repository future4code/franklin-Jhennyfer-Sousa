import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import request from "../services/api";
import "./MovieGrid.css";
import "./Movie.css";

const API_KEY = "api_key=0ece83219b48ac01b14b9c990a574227";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  const [page, setPage] = useState(1);

  const pagP = () => {
    setPage(page + 1);
  };

  const pagN = () => {
    setPage(page - 1);
  };

  const getSearchedMovies = () => {
    request.get(`search/movie/?${API_KEY}}&query=${query}&language=pt-BR&page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
      });
  };

  useEffect(getSearchedMovies, [query, page]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>loading...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className="page">
        <button onClick={pagN}>
          <GoArrowLeft />
        </button>
        <button onClick={pagP}>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Search;
