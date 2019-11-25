<template>
  <div id="app">
    <div class="navCircle left">
      <img src="./assets/white-arrow.svg" alt="venstre" />
    </div>
    <Header />
    <Hero />
    <Intro />
    <Rooms />
    <About />
    <Footer />
    <div class="navCircle right">
      <img src="./assets/white-arrow.svg" alt="hojre" />
    </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Intro from "./components/Intro.vue";
import Rooms from "./components/Rooms.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Hero,
    Intro,
    Rooms,
    About,
    Footer
  }
};
</script>

<style lang="scss">
  #app{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    .navCircle{
      position: fixed;
      height: 140px;
      width: 140px;
      border-radius: 70px;
      background-color: rgba(0,0,0, .1);
      display: flex;
      justify-content: center;
      align-items: center;
      top: 50%;
      transform: translateY(-50%);
      transition: all .2s;
      cursor: pointer;
      img{
        height: 40px;
        width: auto;
      }
      &:hover{
        background-color: rgba(0,0,0, .6);
      }
      &.right{
        right: -110px;
        img{
          margin-right: 40%;
        }
        &:hover{
          right: -70px;
        }
      }
      &.left{
        left: -110px;
        img{
          transform: rotate(180deg);
          margin-left: 40%;
        }
        &:hover{
          left: -70px;
        }
      }
    }
  } 
</style>
