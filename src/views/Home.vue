<template>
  <div class="home">
    <h1>Consumer loan</h1>
    <div class="offer">
      <div class="imageWrapper">
        <img src="../assets/img/small_loan.jpg" alt="small loan" />
      </div>
      <article>
        <h2>Loans that help</h2>
        <p>
          A small loan is a great solution if you need to renovate your home,
          buy new furniture for the terrace, repair your car or to finance your
          next big thing.
        </p>
        <ul class="regular-list">
          <li>Borrow from 500 up to 20 000 € without collateral.</li>
          <li>
            Money is transferred to the account immediately after the conclusion
            of the contract.
          </li>
          <li>
            It is possible to make early repayments without any additional fees.
          </li>
        </ul>
        <router-link class="loan-btn" to="/getLoan"
          >Fill in application</router-link
        >
        <p>
          <span class="ico -pending -caption"
            >It takes only 1-2 minutes to fill loan application.</span
          >
        </p>

        <p>
          Please note, that by using financial services you assume financial
          obligations. Improper execution of financial obligations may adversely
          affect your credit history and raise the cost of borrowing, and it can
          also cause initiation of enforced recovery.
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
@import "../assets/styles/mixins.scss";
.home {
  width: 100%;
  background-color: #f3f4f6;
  padding: 1px 0;
  margin-top: 50px;
  text-align: left;
  p {
    font-size: 20px;
  }
  ul {
    font-size: 20px;
    position: relative;
    list-style: none;
    padding: 0px 10px 0px 10px;
  }

  ul li {
    position: relative;
  }
  ul li:before {
    content: "";
    background-image: none;
    width: 8px;
    height: 14px;
    position: absolute;
    top: 3px;
    left: -10px;
    text-align: center;
    background: $main-color;
    border-radius: 0 12px 12px 0;
    -moz-border-radius: 0 12px 12px 0;
    -webkit-border-radius: 0 12px 12px 0;
  }

  h1 {
    color: #f35b1c;
    font: 32px/32px HeadlineBlack, Arial, sans-serif;
    font-weight: 700;
    margin-left: 25px;
    // padding-top: 20px;
    margin-bottom: 10px;
  }
  h2 {
    font: 36px/1 HeadlineBlack, Arial, sans-serif;
    font-weight: 700;
    margin: 0;
  }

  .offer {
    display: flex;
    padding: 0px 25px 25px 25px;

    .imageWrapper {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: auto;
      order: 2;
      width: auto;
      overflow: hidden;
      max-height: 350px;
      min-height: 200px;
      img {
        transform: translateY(-50%);
        height: auto;
        right: 0;
        position: relative;
        top: 50%;
        width: 100%;
        margin: auto;
      }
    }
  }

  article {
    order: 1;
    .loan-btn {
      align-items: center;
      cursor: pointer;
      color: #fff;
      border-radius: 3px;
      line-height: 18px;
      font-family: sans-serif;
      transition: color 0.3s ease-out;
      transition: border-color 0.3s ease-out;
      transition: background-color 0.3s ease-out;
      background: none $main-color;
      border: 1px solid $main-color;
      display: inline-block;
      -webkit-appearance: none;
      text-decoration: none;
      vertical-align: top;
      box-sizing: border-box;
      text-align: center;
      padding: 13px 15px;
      font-size: 18px;
      margin: -11px 0;
      &:hover {
        border: 1px solid $main-color;
        background: #f35b1c;
      }
    }
  }
}

@include responsive("xs") {
  .home {
    p {
      font-size: 15px;
    }
    ul {
      font-size: 15px;
    }
    h1 {
      margin-left: 10px;
      font-size: 25px;
    }
    .offer {
      display: flex;
      flex-direction: column;
      padding: 10px;
      margin: 0;
      .loan-btn {
        width: 100%;
      }
      h2 {
        font-size: 25px;
      }
      article {
        order: 2;
      }
      .imageWrapper {
        height: 200px;
        width: unset;
        top: 0px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
