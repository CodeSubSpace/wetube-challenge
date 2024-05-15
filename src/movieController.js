import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
  } from "./db";
  
function intersection(arr1, arr2) {
    const set2 = new Set(arr2);
    const intersected = arr1.filter(item => set2.has(item));
    return intersected;
}

  export const home = async (req, res) => {
    const movies = await getMovies()
    res.render("index", { 
        pageTitle: "Home",
        movies
    })
  };

  export const movieDetail = async (req, res) => {
    const { id } = req.params;
    const movie = await getMovieById(id);

    // id가 존재하지 않는 링크에 대한 404 처리
    if (!movie) {
        res.render("404", { pageTitle: "Not Found" })
    }

    res.render("detail", {
        pageTitle: "detail",
        movie,
    })
  };

  export const filterMovie = (req, res) => {
    const year = req.body.year;
    const rating = req.body.rating;
    const yearMovie = getMovieByMinimumYear(year);
    const ratingMovie = getMovieByMinimumRating(rating);

    const movies = intersection(yearMovie, ratingMovie)

    res.render("index", { 
        pageTitle: "Home",
        movies
    })
  };