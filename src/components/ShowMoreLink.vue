<template>
  <a class="bounceLink" href="#">{{text}}<img src="../assets/arrow.png" :alt="text.toLowerCase()"/></a>
</template>

<script>
export default {
  name: "ShowMoreLink",
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  @keyframes bounce {
    0% {
      margin-left: 8px;
    }
    50% {
      margin-left: 21px;
    }
    100% {
      margin-left: 8px;
    }
  }

  .bounceLink:hover img {
    animation: bounce 2s infinite;
  }

  .bounceLink{
    font-weight: 700;
    display: flex;
    font-size: 14px;
    letter-spacing: 1.3px;
    img{
      height: 14px;
      width: 14px;
    }
  }
</style>