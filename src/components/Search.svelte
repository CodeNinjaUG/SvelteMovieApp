<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let searchText;
  let timeOut;

  $: {
    if(searchText !== undefined) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
           dispatch('search',{ searchText })
      }, 500);
    }
  }
  
</script>
  
<div class="wrapper">
     <div class="content">
       <i class="fa fa-search fa-2x" name="search" />
        <input bind:value={searchText} type="text" placeholder="Search Movie"/>
     </div>
</div>

<style>
    .wrapper{
        width:100%;
        height: 105px;
        background: #1c1c1c;
        padding:25px 20px 0px 20px;
        box-sizing: border-box;
        color:#fff;
    }
     
    .content{
        max-width: 1280px;
        margin:0 auto;
        border-radius: 40px;
        position:relative;
        background-color: rgba(0, 0, 0, 0.5);
    }
    input{
        width: 100%;
        height: 46px;
        line-height: 46px;
        font-size: 1.1em;
        color:#1c1c1c;
        border: none;
        border-radius: 30px;
        padding: 10px 20px;
    }

</style>