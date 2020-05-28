<template>
  <div id="FormSubmitted">
    <div class="submittedWrapper">
      <h1>Your application have been submitted</h1>
      <img src="../assets/img/submitted.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

#FormSubmitted {
  .submittedWrapper {
    display: flex;
    flex-direction: column;
    h1 {
      margin: 50px;
      color: $secondary-color;
      text-align: center;
      margin-bottom: 0px;
    }
    img {
      height: 50px;
          padding: 25px;

    }
    @include responsive("-md") {
      h1 {
        font-size: 20px;
        margin: 32px;
         margin-bottom: 0px;
      }
    }
  }
}
</style>
