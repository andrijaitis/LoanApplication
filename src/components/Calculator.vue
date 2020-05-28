<template>
  <div class="Calculator">
    <h1 class="pageHeader">Calculate your loan possibilities</h1>

    <div class="calculatorWrapper">
      <div class="sliderWrapper">
        <label class="slider-label">Your/family income</label>
        <vue-slider
          id="income"
          style="width: 65%;"
          :min="350"
          :max="5000"
          :interval="50"
          :tooltip="'always'"
          :tooltip-placement="'top'"
          :enable-cross="false"
          :adsorb="true"
          :included="true"
          :hide-label="true"
          :hide-marks="true"
          :tooltip-formatter="ammountFormatter"
          v-model="calcValues.incomeValue"
          ><template>
            <div>
              <label class="vue-slider-mark-label customLabel-left">0 €</label>
              <label class="vue-slider-mark-label customLabel-right"
                >5000 €</label
              >
            </div>
          </template>
        </vue-slider>
      </div>
      <div class="sliderWrapper">
        <label class="slider-label"
          >Your/family monthly expenses for covering your credits</label
        >
        <vue-slider
          id="expenses"
          style="width: 65%;"
          :min="0"
          :max="1000"
          :tooltip="'always'"
          :interval="50"
          :tooltip-placement="'top'"
          :enable-cross="false"
          :adsorb="true"
          :included="true"
          v-model="calcValues.expensesValue"
          :tooltip-formatter="ammountFormatter"
          ><template>
            <div>
              <label class="vue-slider-mark-label customLabel-left">0 €</label>
              <label class="vue-slider-mark-label customLabel-right"
                >1000 €</label
              >
            </div>
          </template>
        </vue-slider>
      </div>
      <div class="sliderWrapper">
        <label class="slider-label">Loan amount</label>
        <vue-slider
          id="amount"
          style="width: 65%;"
          :min="500"
          :max="20000"
          :interval="100"
          :tooltip="'always'"
          :tooltip-placement="'top'"
          :enable-cross="false"
          :adsorb="true"
          :included="true"
          v-model="calcValues.loanValue"
          :tooltip-formatter="ammountFormatter"
          ><template>
            <div>
              <label class="vue-slider-mark-label customLabel-left"
                >500 €</label
              >
              <label class="vue-slider-mark-label customLabel-right"
                >20000 €</label
              >
            </div>
          </template>
        </vue-slider>
      </div>
      <div class="sliderWrapper">
        <label class="slider-label">Term</label>
        <vue-slider
          id="terms"
          style="width: 65%;"
          :min="1"
          :max="5"
          :tooltip="'always'"
          :tooltip-placement="'top'"
          :enable-cross="false"
          :adsorb="true"
          :included="true"
          v-model="calcValues.termValue"
          :marks="termMarks"
          :tooltip-formatter="yearFormatter"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},

  watch: {
    calcValues: {
      handler(val) {
           this.$store.dispatch("setCalcData", val);
      this.$store.dispatch("setCalcState", true);
      },
      deep: true,
    },
  },

  methods: {},
  data() {
    return {
      calcValues: {
        loanValue: 500,
        incomeValue: 350,
        expensesValue: 0,
        termValue: 1,
      },
      monthlyPayment: 0,
      maxLoanAmount: 0,

      ammountFormatter: "{value} €",
      yearFormatter: "{value} y.",

      incomeMarks: {
        "350": {
          label: "350 €",
        },
        "5000": {
          label: "5000 €",
        },
      },
      termMarks: {
        "1": "1 y.",
        "2": "",
        "3": "",
        "4": "",
        "5": {
          label: "5 y.",
          // style: {
          //   width: "8px",
          //   height: "8px",
          //   display: "block",
          //   backgroundColor: "red",
          //   transform: "translate(-2px, -2px)",
          // },
        },
      },
    };
  },
};
</script>
<style lang="scss" >
@import "../assets/styles/mixins.scss";
.Calculator {
  .vue-slider-dot-tooltip-inner {
    background: $main-color;
    border-color: $main-color;
  }
  .vue-slider-process {
    background-color: $main-color;
  }
  // h1 {
  //     margin: 50px 50px 50px 10%;
  //   color: $secondary-color;
  // }
  
  .calculator-results {
    .slider-label {
      display: inline-block;
      width: 140px;
      text-align: left;
    }
    .results {
      display: inline-block;
    }
  }

  .calculatorWrapper {
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    .slider-label {
      display: inline-block;
      width: 25%;
      text-align: right;
      padding-top: 15px;
      padding-bottom: 50px;
      color: $secondary-color;
    }
    .customLabel-left {
      left: 0%;
    }
    .customLabel-right {
      left: 100%;
    }

    .sliderWrapper {
      .vue-slider {
        margin-left: 5%;
        width: 75%;
        display: inline-block;
        // display: flex;
      }
    }
  }
}
@include responsive("-md") {
// @media screen and (max-width: 767px) {
  .getLoan {
 
    .calculatorWrapper {
      padding-top: 0px;
      padding-right: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
      .slider-label {
        width: 100%;
        text-align: left;
        font-size: 14px;
           padding-top: 20px;
      }
      .sliderWrapper {
        .vue-slider {
          display: block;
          width: 100% !important;
          margin-left: 0%;
        }
      }
    }
  }
}
</style>
