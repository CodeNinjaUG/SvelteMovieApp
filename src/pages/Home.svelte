<script>
import { onMount } from 'svelte';
import { fetchMovies } from '../api';
import Hero from '../components/Hero.svelte';
import Search from '../components/Search.svelte';
import Grid from '../components/Grid.svelte';
import Thumb from '../components/Thumb.svelte';
import Spinner from '../components/Spinner.svelte';
import { IMAGE_BASE_URL,BACKDROP_SIZE, POSTER_SIZE } from '../config.js';
import LoadMoreButton from '../components/LoadMoreButton.svelte';
let movies = { movies:[]};
let isLoading;
let searchTerm = '';
let error;

const handleFetchMovies = async(loadMore, searchTerm) => {
    try{
      isLoading = true;
      error = false;
      movies = await fetchMovies(movies, loadMore, searchTerm);
      }catch(err){
         error = true;
      }
      isLoading = false;
}

const handleSearch = event => {
   searchTerm = event.detail.searchText;
   movies.movies=  [];
   handleFetchMovies(false, searchTerm);
}

const handleLoadMore = () => handleFetchMovies(true, searchTerm);


onMount( async() => {
    const sessionMovies = window.sessionStorage.getItem('all-movies');
    if(sessionMovies){
       console.log('from storage');
       movies = JSON.parse(sessionMovies);
    }else{
        console.log('from api');
        handleFetchMovies(false,searchTerm)
    }
})

$:{
    if(movies.movies.length > 0){
        window.sessionStorage.setItem('all-movies',JSON.stringify(movies));
    }
}
</script>

{#if error}
    <p> Something went wrong ...</p>
{:else}

{#if movies.heroImage && !searchTerm}
<Hero
  image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.heroImage.backdrop_path}`}
  title={movies.heroImage.original_title}
  text={movies.heroImage.overview}
  />
{/if}
{/if}

<Search on:search={handleSearch}/>
<Grid header={ searchTerm ? 'Search Result' : 'Popular Movies'}>
    {#each movies.movies as movie}
         <Thumb 
          clickable
          image={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
          movieId={movie.id}
         />
    {/each}
</Grid>
<!-- {movies.totalPages} -->
<!-- {#if !isLoading && movies.currentPage < movies.totalPages}
    <LoadMoreButton on:loadMore={handleLoadMore}>
        Load More
    </LoadMoreButton>
{/if} -->

<LoadMoreButton on:loadMore={handleLoadMore}>
    Load More
</LoadMoreButton>
{#if isLoading}
<Spinner/>
{/if}
<style>

</style>