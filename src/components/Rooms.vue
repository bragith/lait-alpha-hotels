<template>
  <section id="rooms" class="content">
    <div v-for="(value, i) in post" :key="i">
      <img :src="value.img" :alt="value.type"/>
      <h3>{{value.type}}</h3>
      <ShowMoreLink text="LÆS MERE" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ShowMoreLink from "./ShowMoreLink.vue";

export default {
  name: "Rooms",
  components: {
    ShowMoreLink
  },
  data() {
    return {
      post: null
    };
  },
  created: function() {
    axios
      .get("https://5dd653dfce4c3000144036d1.mockapi.io/rooms")
      .then(res => {
        this.post = res.data.slice(0,4);
      })
  } 
};
</script>

<style lang="scss">
  #rooms{
    background-color: $sectionBeige;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    >div{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 100px;
      h3, a{
        align-self: flex-start;
        color: $blue;
        font-weight: 700;
      }
      h3{
        font-size: 35px;
        margin-bottom: 35px;
        letter-spacing: .3px;
      }
      a{
        font-weight: 700;
        display: flex;
        font-size: 14px;
        letter-spacing: 1.3px;
        img{
          height: 14px;
          width: 14px;
          margin-left: 8px;
        }
      }
      >img{
        margin-bottom: 42px;
      }
      &:nth-child(1), &:nth-child(4){
        width: 49%;
        overflow: hidden;
        >img{
          height: 90vh;
          width: auto
        }
      }
      &:nth-child(2), &:nth-child(3){
        width: 40%;
        overflow: hidden;
        >img{
          height: 65vh;
          width: auto
        }
      }
    }
  }
</style>