export const goToHomePage = (navigate) => {
    navigate("/");
  };

export const goToMoviePopular = (navigate) => {
    navigate("movie/popular")
};

export const goToMovieDetail = (navigate, id) => {
    navigate(`movie/${id}`)
};

export const goToMovieSearch = (navigate) => {
    navigate("search")
};


