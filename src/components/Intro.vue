<template>
  <section id="intro" class="textSection content">
    <div class="titleText">
      <h3>OM ALPHA</h3>
    </div>
    <div class="contentText">
      <p>Hotels er vejles nyeste hotel beliggende i hjertet ad vejle Fjord. 
        Hotellet åbner officielt dørene for gæster i vinter 2020</p>
      <p>Hotellet tilbyder 390 helt nyrenoverede værelser, en smuk ny café og en fredfyldt grøn
        hårdhave åben for hotellets gæster, lokale og forbipasserende. Cafeen og 
        gårdhaven er indrettet til at få alle til at føle sig velkomne uanset anledningen.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Intro"  
  };
</script>

<style lang="scss">
  #intro{
    &.textSection{
      padding-top: 150px;
      padding-bottom: 123px;
    }
  }
  .textSection{
    display: flex;
    background-color: $sectionBeige;
    color: $blue;
    .titleText{
      width: 33.3333%;
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 2.5px;
    }
    .contentText{
      width: 66.66666%;
      margin-top: -8px;
      p{
        font-size: 20px;
        line-height: 37px;
        font-weight: 500;
        &:nth-child(1){
          margin-bottom: 50px;
        }
      }
      a{
        display: block;
        margin-top: 50px;
      }
    }
  }
</style>