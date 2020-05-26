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
@mixin responsive($breakpoint) {
  @if $breakpoint == "xxxxs" {
    @media (max-width: 358px) {
      @content;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @if $breakpoint == "xs" {
    @media (max-width: 600px) {
      @content;
    }
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @if $breakpoint == "xs" {
    @media (min-width: 600px) {
      @content;
    }
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @if $breakpoint == "xs" {
    @media (min-width: 768px) {
      @content;
    }
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @if $breakpoint == "xs" {
    @media (min-width: 992px) {
      @content;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @if $breakpoint == "xs" {
    @media (min-width: 1200px) {
      @content;
    }
  }
}
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// .container-main {
//   // background: #fbf2ea;
//   // width: 100% !important;
//   // margin-right: auto;
//   // margin-left: auto;
//   // max-width: $grid-width;
//   // padding-right: ($gutter-width / 2);
//   // padding-left: ($gutter-width / 2);
//   // &:before {
//   //   display: none !important;
//   // }
//   // &:after {
//   //   display: none !important;
//   // }
// }

.container-main {
  width: unset !important;
  // height: 82vh;

  .containerLoanIntro {
    // width: 75%;

    @include responsive("xxs") {
    }
    @include responsive("xxs-xs") {
    }

    background: #ffffff;
    background-size: cover;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
    // background-repeat: no-repeat;
    margin: 10% 12%;
    // display: flex;

    @include responsive("xs") {
      // background-position-y: 260px;
      // background-size: 100%;
      // justify-content: center;
    }

    @include responsive("sm") {
      // background-position-x: center;
      // justify-content: flex-start;
    }
  }
}
</style>
