<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import Navigation from '../components/Navigation.svelte';
    import Spinner from '../components/Spinner.svelte';
    import MovieInfo from '../components/MovieInfo.svelte';
    import MovieInfoBar from '../components/MovieInfoBar.svelte';
    import Actor from '../components/Actor.svelte';
    import Grid from '../components/Grid.svelte';
    import { fetchMovie } from "../api";
    export let params;
    let error;
    let movie;
    let isLoading; 
    const handleFetchMovie = async () => {
       try{
         isLoading = true;
         error = false;
         movie = await fetchMovie(params.id)
       }catch(err){
          error = true;
       }
       isLoading = false;
    }
    onMount(async () => {
        handleFetchMovie();
    })
</script>
{#if error}
   <p> Something went wrong </p>
{:else if movie}
  <div transition:fade={{duration:300}} >
         <Navigation movie={movie.original_title}/>
         <MovieInfo  {movie} />
         <MovieInfoBar />
         <Grid />
         <Actor />
  </div>
  {/if}
  {#if  isLoading}
    <Spinner/>
  {/if} 
<style>
   
</style>