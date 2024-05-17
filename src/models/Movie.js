import mongoos from "mongoose";

const movieSchema = new mongoos.Scehma({
    title: { type: String, requried: true},
    suummary: { type: String, requried: true},
    year: { type: Date, requried: true},
    rating: { type: Number, requried: true},
    genres: [{ type: String, requried: true}],
})

const Movie = mongoos.model("Movie", movieSchema);

export default Movie;