<script>
   import { calcTime , convertMoney} from '../helpers';
   export let time;
   export let budget;
   export let revenue;
</script>

<div class="wrapper">
<div class="content">
   <div class="content-col">
      <p> Running Time: {calcTime(time)} </p>
   </div>

   <div class="content-col">
     <p> Budget: {convertMoney(budget)}</p>
   </div>

   <div class="content-col">
      <p> Revenue: {convertMoney(revenue)} </p>
   </div>
</div>
</div>
<style>
 
.wrapper{
    display: flex;
    align-items: center;
    width:100%;
    min-height: 100px;
    height:auto;
    background: #1c1c1c;
    padding:20px;
    box-sizing: border-box;
    font-size: 20px;
}

.content{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #1c1c1c;
    gap: 30px;
}

.content-col{
    border-radius: 15px;
    text-align: center;
    background-color: gray;
    font-size: 17px;
    font-weight: 400;
    padding: 5px auto;
    color: #fff;
    width: 30%;
}   



</style>