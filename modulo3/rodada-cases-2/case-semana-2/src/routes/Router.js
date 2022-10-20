import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import MoviePopular from "../pages/MoviePopular";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/popular" element={<MoviePopular/>} />
      <Route path="movie/:id" element={<Movie/>} />
      <Route path="search" element={<Search/>} />
    </Routes>
  );
};

export default Router