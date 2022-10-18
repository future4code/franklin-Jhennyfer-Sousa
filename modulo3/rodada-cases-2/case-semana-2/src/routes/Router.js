import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/:id" element={<Movie/>} />
      <Route path="search" element={<Search/>} />
    </Routes>
  );
};

export default Router