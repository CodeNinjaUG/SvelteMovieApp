import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_KEY,
    API_URL,
    MOVIE_ENDPOINT,
    CREDITS_ENDPOINT,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
 } from './config';

 export const fetchMovies = async(movies, loadMore, searchTerm) => {
   const endpoint = searchTerm 
    ?`${SEARCH_BASE_URL}${searchTerm}&page=${
        loadMore ? movies.currentPage + 1 : 1
    }`
    : `${POPULAR_BASE_URL}&page=${loadMore ? movies.currentPage+1: 1}`;


    const result = await (await fetch(endpoint)).json();
    return {
        ...movies,
        movies:loadMore ? [...movies.movies, ...result.results] : [...result.results],
        currentPage:result.page,
        totalPages:result.page,
        heroImage: movies.heroImage || result.results[0],
    }
 }