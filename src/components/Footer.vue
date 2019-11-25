<template>
  <footer id="footer">
    <div class="textSection content">
      <div class="titleText">
        <Logo color="blue" />
      </div>
      <div class="contentText">
        <div>
          <ul>
            <li class="title">OM OS</li>
            <li><a href="#">Om alpha hotels</a></li>
            <li><a href="#">Hotel & spa</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="title">KONTAKT</li>
            <li>Sanatorievej 26</li>
            <li>DK-7140 Stouby</li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="title">SOCIAL</li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./Logo.vue";
  export default {
    name: "Footer",
    components: {
      Logo
    }
  };
</script>

<style lang="scss">
  footer#footer {
    box-sizing: border-box;
    background-color: white!important;
    height: 50vh;
    padding-top: 100px;
    .textSection{
      background-color: white!important; 
    }
    p{
      font-family: "Circular Std Bold";
      font-size: 40px;
      margin-right: auto;
      font-weight: 700;
      letter-spacing: .3px;
    }
    .contentText{
      display: flex;
      justify-content: space-between;
      >div{
        min-width: 150px;
        .title{
          font-weight: bold;
        }
        li{
          margin-bottom: 25px;
          font-size: 14px;
          letter-spacing: 1.3px;
          &:not(:nth-child(1)), a{
            font-family: 'Fira Sans', sans-serif;
            font-size: 14px;
            letter-spacing: 1.3;
          }
          a{
            margin: 0;
          }
        }
      }
    }
  }
</style>