<script>
   export let image ='';
   export let movieId = '';
   export let clickable = false;
   const noImage = '/images/no_image.jpg';
</script>
<div class="wrapper">
    {#if clickable}
       <a href="/movie/{movieId}">
         <img class="clickable" src={image ? image: noImage } alt="moviethumb" />
       </a>
        {:else}
        <img src={image ? image : noImage}  alt="moviethumb"/>
    {/if}
</div>
<style>
    img {
        width: 100%;
        transition: all 0.3s;
        object-fit: cover;
        border-radius: 20px;
        animation: animateMovieThumber 0.5s;
    }

    img:hover{
        opacity: 0.8;
    }
    
    .clickable{
        cursor: pointer;
    }

    @keyframes animateMovieThumb{
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>