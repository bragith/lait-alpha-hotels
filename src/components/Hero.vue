<template>
  <section id="hero">
    <div class="content">
      <!-- Hvorfor er denne text på EN men resten af siden på DA? -->
      <h2>All you <br/> need to sleep</h2>
      <Button class="button button-blue">BOOK VÆRELSE</Button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Hero"  
  };
</script>

<style lang="scss">
  #hero{
    box-sizing: border-box;
    background-image: url('../assets/hero_img.jpg');
    background-size: cover;
    background-position: center; 
    height: calc(100vh + 30px);
    padding-top: 48vh;
    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin-top: -76px;
    h2{
      font-size: 110px;
      color: white;
      font-weight: 700;
    }
    .button{
      margin-top: 43px;
      margin-bottom: 104px;
    }
    h2, .button{
      margin-left: calc((100% / 12) + 15px);
    }
  }
</style>