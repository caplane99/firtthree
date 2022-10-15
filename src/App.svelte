<script>
	 import { onMount } from 'svelte';
  import { createScene,pop } from "./scene";
  import{fly,fade}from 'svelte/transition'
  let bool=false;
  let el;
  export let y=0;
  window.addEventListener("keydown", (event) => {
console.log(event.key)
  })
  onMount(() => {
    createScene(el)
    
  });

</script>

<main>
  
  <div id="bob"></div>
  {pop(y,bool)}
	<canvas bind:this={el}></canvas>
  <div id="lop" >
    
    
    
    
  </div>
  
    {#if y>550}
    <div in:fade={{ delay: 300 }} id="head"><h1 id="caplane">CAPLANE</h1></div>
    <div class="big">
      
    <div class="cont">
       <div in:fade={{ delay: 600 }} out:fade class="ite"id="block1">
        <h1>caplane99</h1>
        <p>is for gaming</p>
      </div>
       <div in:fade={{ delay:1200 }} out:fade class="ite"id="block2">
        <h1>caplane98</h1>
        <p>is for cinema and tv shows</p>
      </div>
       <div in:fade={{ delay: 1000 }} out:fade class="ite"id="block3">
        <h1>caplane97</h1>
        <p>
          is for coding and programing 
        </p>
      </div>
      </div>
      </div>
    {/if}
    {#if y>1500}
  <div class="big">
  <div id="lo">

    <a class="font-effect-anaglyph"  href="http://www.youtube.com/channel/UC0fQcuCnimcOzDMbtkF6PdQ"><h1 transition:fly={{x:1000,y:-800}}>Youtube</h1></a>
    <a class="font-effect-anaglyph" href="http://www.twitch.tv/caplane99"><h1 transition:fly={{x:-1000,y:-800}}>Twitch</h1></a>
    <img class="ko" transition:fly={{x:-1000,y:-800}} src="channels4_profile.jpg" alt="profile">
  </div>
</div>
    {/if}
    
    <div id="lop" >
    
    
    
    
    </div>
    <div id="lop" >
    
    
    
    
    </div>
  
</main>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide&effect=neon|anaglyph">
<svelte:window bind:scrollY={y} />

<style>
  #caplane{
    font-size: 10vh;
    text-align: center;
    margin: auto;
  }
  #head{
    background-color: rgba(26, 27, 28, 0.868);
    height: 20vh;
    width: 80%;
    margin: auto;
    margin-top: 10%;
    border-radius: 15px;
  }
  p{
    color: aliceblue;
    font-size: large;
  }
  .cont{
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-column-gap: 10px;
    width: 80%;
    height: 70vh;
margin-top: 1%;
    
    
  }
  .ite{
    background-color: rgba(26, 27, 28, 0.868);
    border-radius: 30px;
    height: 70vh;
    width:100%;
  }
  .ko{
    grid-column: 2/3;
    grid-row: 1/3;
    border-radius: 20px;
    margin-left: 50%;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  h1{
    grid-column: 1/2;
    font-size: xx-large;
    color: rgb(255, 255, 255);
    margin-right: 20%;
    font-family: "Audiowide", sans-serif;
  }
  #lo{
    margin-top: 7%;
    display: grid;
    width: fit-content;
    height: fit-content;
    justify-content: space-between;
  
  }
  
  
	canvas{
    height: 100%;
    width: 100%;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  main{
    position: absolute;
    height: 100%;
    width: 100%;
    
  

  

  }
  .big{
    display: flex;
    justify-content: center;
  }
  #lop{
    height: 1000px;

  }
  #bob{
    display: flex;
  justify-content: center;
  }
  @media (max-width: 700px) {
    #caplane{
    font-size: 10vw;
    text-align: center;
    margin: auto;
    }
    h1{
    grid-column: 1/2;
    font-size: 5vw;
    color: rgb(255, 255, 255);
    margin-right: 20%;
    font-family: "Audiowide", sans-serif;
  }
  }

</style>