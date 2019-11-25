<template>
  <a :class="['logo', color]">alpha hotels</a>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      color: String
    }
  };
</script>

<style lang="scss" scoped>
  .logo{
    font-family: "Circular Std Bold";
    font-size: 40px;
    margin-right: auto;
    font-weight: 700;
    letter-spacing: .3px;
    &.white{
      color: $offWhite;
    }
    &.blue{
      color: $blue;
    }
  }
</style>