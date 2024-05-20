/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

export const movieHome = async (req, res) => {
    const movies = await Movie.find({})
    console.log(movies)
}

// Add your magic here!
