import "../css/Favorites.css"
import {useMovieContext} from "../contexts/movieContext"
import MovieCard from "../components/movieCard"
function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites){
        return (
            <div calssNmae="movie-grid">
                {
                    favorites.map((movie) => {
                        <MovieCard movie={movie} key = {movie.id}/>
                    })
                }
            </div>
        )
    }
    return (<div className="favorites-empty">
        <h2>No Favorite Movies</h2>
        <p>start adding movies to your favorites and they will appear here</p>
    </div>)
}

export default Favorites