<script>
  export let header;
</script>
<div class="wrapper">
    <h1> { header } </h1>
    <div class="content">
        <slot/>
    </div>
</div>
<style>
   .wrapper{
     max-width: 1280px;
     margin: 0 auto;
     padding: 0 20px;
   }
   .content{
      display: grid;
      grid-template-columns:
       repeat(5, 1fr);
      column-gap: 10px;
      row-gap: 15px;
   }

   h1{
      font-family: 'Abel', sans-serif;
      font-size: 22px;
   }
</style>