/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!

export const movieHome = async (req, res) => {
    const movies = await Movie.find({})
    res.render("home", {
        pageTitle: "Home",
        movies,
    })
}

export const getUpload = (req, res) => {
    res.render("upload", {
        pageTitle: "Upload",
    })
};
export const postUpload = async (req, res) => {
    const { title, summary, year, rating, genres} = req.body
    const newVideo = await Movie.create({
        title, summary, year, rating, genres
    })
    return res.redirect("/");
};

export const movieDetail = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id)
    res.render("detail", {
        pageTitle: "Movie detail",
        movie,
        movie_id: id
    })
}

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("edit", {
        pageTitle: "Edit",
        movie
    })
}
export const postEdit = async (req, res) => {
    const { title, summary, year, rating, genres} = req.body
    const { id } = req.params;
    const movie = await Movie.findById(id);

    await Movie.findByIdAndUpdate(id, {
        title, summary, year, rating, genres
    });
    return res.redirect(`/${id}`);
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    await Movie.findByIdAndDelete(id);
    return res.redirect("/");
}