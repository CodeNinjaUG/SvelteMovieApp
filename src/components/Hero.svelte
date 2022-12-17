<script>
   export let image;
   export let title;
   export let text;
</script>
<div class="wrapper" style="--image:url({image})">
     <div class="content">
        <div class="text">
             <h1>{ title } </h1>
             <p> { text }</p>
        </div>
     </div>
</div>

<style>
   .wrapper{
     background: linear-gradient(
        to bottom,
        rgba(0,0,0,0) 39%,
        rgba(0,0,0,0) 41%,
        rgba(0,0,0,65) 100% 
     ),
     var(--image), #1c1c1c;
     background-size: 100% cover;
     background-position: center center;
     height: 600px;
     position: relative;
     animation:animationHeroimage 1s;
   }

   .content{
    max-width: 1280px;
    padding:20px; 
    margin:0 auto;
    padding-left:50px;
   }

   .text {
    z-index: 100;
    max-width: 700px;
    position:absolute;
    bottom: 40px;
    color: aliceblue;
   }
    
</style>