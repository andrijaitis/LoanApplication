<template>
  <div class="getLoan">
    <Calculator v-show="step == 1 && !getFormSubmited"></Calculator>
    <PersonalData v-show="step == 2 && !getFormSubmited"></PersonalData>
    <CoBorrower v-show="step == 3 && !getFormSubmited"></CoBorrower>
    <Summary v-show="step == 4 && !getFormSubmited"></Summary>
    <FormSubmited v-show="getFormSubmited"></FormSubmited>
    <ProgressBar
      v-if="!getFormSubmited"
      v-bind:barData="{
        pageNumber: step,
        totalPages: totalPages
      }"
      @goBack="goBack()"
      @goForward="goForward()"
      @submit="submitForm()"
    ></ProgressBar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";
import Calculator from "@/components/Calculator.vue";
import PersonalData from "@/components/PersonalData.vue";
import Summary from "@/components/Summary.vue";
import FormSubmited from "@/components/FormSubmited.vue";
import CoBorrower from "@/components/CoBorrower.vue";
export default {
  components: {
    ProgressBar,
    Calculator,
    PersonalData,
    Summary,
    FormSubmited,
    CoBorrower
  },
  computed: {
    ...mapGetters(["getFormSubmited"])
  },
  methods: {
    submitForm() {
      this.$store.dispatch("setFormSubmited", true);
    },
    goBack() {
      if (this.step <= 1) {
        this.$router.push("/");
      } else {
        this.step = this.step - 1;
      }
    },
    goForward() {
      if (this.step >= this.totalPages) {
        return;
      } else {
        this.step = this.step + 1;
      }
    }
  },
  data() {
    return {
      submited: false,
      step: 1,
      totalPages: 4,
      monthlyPayment: 0,
      maxLoanAmount: 0,
      ammountFormatter: "{value} €",
      yearFormatter: "{value} y.",
      incomeValue: 350,
      expensesValue: 0,
      loanValue: 500,
      termValue: 1,
      incomeMarks: {
        "350": {
          label: "350 €"
        },
        "5000": {
          label: "5000 €"
        }
      },
      termMarks: {
        "1": "1 y.",
        "2": "",
        "3": "",
        "4": "",
        "5": {
          label: "5 y."
          // style: {
          //   width: "8px",
          //   height: "8px",
          //   display: "block",
          //   backgroundColor: "red",
          //   transform: "translate(-2px, -2px)",
          // },
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/mixins.scss";
.getLoan {
  width: 100%;
  background-color: #f3f4f6;
  padding: 1px 0;
  margin-top: 50px;
  text-align: left;
}
</style>
