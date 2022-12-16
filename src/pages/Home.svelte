<script>
import { onMount } from 'svelte';
import { fetchMovies } from '../api';
import Hero from '../components/Hero.svelte';
import Search from '../components/Search.svelte';
import Grid from '../components/Grid.svelte';
import Thumb from '../components/Thumb.svelte';
import Spinner from '../components/Spinner.svelte';
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
      console.log(movies);
    }catch(err){
       error = true;
    }
    isLoading = false;
}

onMount(async() => {
    handleFetchMovies(false,searchTerm)
})
</script>
<Hero/>
<Search/>
<Grid/>
<Thumb/>
<LoadMoreButton/>
<Spinner/>
<style>

</style>