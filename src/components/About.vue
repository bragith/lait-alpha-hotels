<template>
  <section id="about" class="textSection content">
    <div class="titleText" />
    <div class="contentText">
      <p>
        Omgivet af bøgeskov og med udsigt til fjorden ligger vores smukke hotel - også
        kaldet "Slottet i skoven".
      </p>
      <p>
        Du kan bestille hotel overnatninger - men også dejlige spaophold, som på Hotel 
        Alpha ALTID er inklusiv adgang til De Termiske Bade & Thalasso Spa, middag,
        overnatning og morgenbuffet.
      </p>
      <ShowMoreLink text="SE ALLE VÆRELSER" />
    </div>
  </section>
</template>

<script>
import ShowMoreLink from "./ShowMoreLink.vue";
  export default {
    name: "About",
    components: {
      ShowMoreLink
    }
  };
</script>

<style lang="scss">
  #about{
    margin-bottom: 238px;
    a{
      color: $blue;
      display: flex;
      font-size: 14px;
      letter-spacing: 1.3px;
      font-weight: 700;
      img{
        height: 14px;
        width: 14px;
        margin-left: 8px;
      }
    }
  }
</style>