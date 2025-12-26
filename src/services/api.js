const API_KEY = "haha";
const Base_URl= "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${Base_URl}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${Base_URl}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}