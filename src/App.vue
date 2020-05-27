<template>
  <div id="app">
    <div class="container-main">
      <div class="containerLoanIntro">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/mixins.scss";

$font-base: "Open Sans", sans-serif;

$grid-width: 1140px;
$gutter-width: 30px;
$grid-width-2: 1350px;

body {
  background: #fbf2ea;
  font: 15px/22px Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-main {
  width: unset !important;
  .containerLoanIntro {
    background: #ffffff;
    background-size: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
    margin: 10% 12%;
  }
  .pageHeader {
    margin: 50px 50px 50px 10%;
    color: #512b2b;
    // font-size: 20px;
    // margin: 32px 32px 0px 32px;
  }

  select {
    flex-wrap: nowrap;
    justify-content: space-between;
    border: 1px solid #bcd8db;
    border-radius: 3px;
    background-color: #ebf8f2;
    padding: 2px 2px 2px 2px;
    font-size: 15px;
    // text-align: left;
    // word-break: break-word;
    // box-sizing: border-box;
    // display: flex;
    // flex-wrap: wrap;
    // align-content: flex-start;
    // align-items: center;
    // margin: 0;
    // width: 100%;
    // height: 100%;
    // background-color: #fff;
    // padding: 12px 10px 12px 10px;
  }

  label {
    margin-right: 7px;
    color: #a38b80;
    display: inline-block;
    padding: 0;
    font-size: 15px;
  }

  input {
    line-height: 18px;
    border: 1px solid #bcd8db;
    border-radius: 3px;
    box-sizing: border-box;
    color: #512b2b;
    background-color: #fff;
    -webkit-appearance: none;
    font-size: 15px;
    padding: 2px 2px 2px 2px;
    margin-top: -11px;
    border-color: #8acdc3;
  }

  @include responsive("-md") {
  .pageHeader {
    font-size: 20px;
    margin: 32px 32px 0px 32px;
  }

  }
}
</style>
