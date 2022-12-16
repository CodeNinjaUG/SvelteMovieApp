const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '98e0ed55c6bbf86aaf677e72d1af643d';
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const MOVIE_ENDPOINT = id => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const CREDITS_ENDPOINT= id => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;


const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';



export{
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_KEY,
    API_URL,
    MOVIE_ENDPOINT,
    CREDITS_ENDPOINT,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
};