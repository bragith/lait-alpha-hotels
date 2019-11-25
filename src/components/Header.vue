<template>
  <nav id="mainNav" :class="{small: scrolled}">
    <div class="content">
      <Logo color="white"/>
      <ul>
        <li><a href="#">FORSIDE</a></li>
        <li><a href="#">VÆRLESER</a></li>
        <li><a href="#">OM HOTELS</a></li>
        <li><a href="#">KONTAKT</a></li>
        <li><a href="#">BOOK</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import Logo from "./Logo.vue";

  export default {
    name: "Header",
    data() {
      return {
        scrolled: false
      }
    },
    components: {
      Logo
    },
    created() {
      document.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      document.removeEventListener('scroll', this.handleScroll);
    },
      methods: {
        handleScroll() {
          console.log(window.pageYOffset)
          window.pageYOffset > 0 ? this.scrolled = true : this.scrolled = false
        }
      },
  };

  
</script>

<style lang="scss">
  #mainNav>ul{
    display: flex;
    flex-direction: row;
  }
  #mainNav{
    position: sticky;
    top: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all .4s;
    >div{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    p{
      font-family: "Circular Std Bold";
      font-size: 40px;
      margin-right: auto;
      font-weight: 700;
      letter-spacing: .3px;
    }
    p,ul{
      width: 50%; 
      color: $offWhite;
    }
    ul{
      display: flex;
      justify-content: space-between;
      li a{
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 1.3px;
        color: $offWhite;
      }
    }
    &.small{
      top: 0;
      background-color: white;
      a,p{
        color: $blue;
      }
    }
  }
</style>