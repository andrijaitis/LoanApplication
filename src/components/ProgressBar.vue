<template>
  <div id="progressbar">
    <button @click="goBack()" class="backBtn">&lt;Back</button>
    <button
      :disabled="
        (!$store.getters.getCalcState && barData.pageNumber == 1) ||
          ($store.getters.getPersonalDataState && barData.pageNumber == 2) ||
          (!$store.getters.getCoBorrowersState && barData.pageNumber == 3)
      "
      v-if="this.barData.totalPages !== this.barData.pageNumber"
      @click="goForward()"
      class="nextBtn"
    >
      Next&gt;
    </button>
    <button
      v-if="this.barData.totalPages == this.barData.pageNumber"
      @click="submit()"
      class="nextBtn"
    >
      Submit
    </button>
    <div class="bar" v-bind:style="{ width: percentage + '%' }"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  name: "ProgressBar",
  props: {
    barData: Object,
  },

  methods: {
    submit() {
      if (this.getCoBorrowers && this.getFullPersonalData && this.getCalcData)
        this.$emit("submit");
    },
    goBack() {
      this.$emit("goBack");
    },
    goForward() {
      this.$emit("goForward");
    },
  },
  computed: {
    ...mapGetters(["getCoBorrowers", "getFullPersonalData", "getCalcData"]),
    percentage: function() {
      return (100 / this.barData.totalPages) * this.barData.pageNumber;
    },
  },
};
</script>

<style scoped lang="scss">
#progressbar {
  .bar {
    background-color: #f35b1c;
    height: 20px;
  }
  button {
    align-items: center;
    cursor: pointer;
    color: #fff;
    border-radius: 3px;
    line-height: 5px;
    font-family: SwedbankMedium, sans-serif;
    transition: color 0.3s ease-out;
    transition: border-color 0.3s ease-out;
    transition: background-color 0.3s ease-out;
    background: none #ee7023;
    border: 1px solid #ee7023;
    display: inline-block;
    -webkit-appearance: none;
    text-decoration: none;
    vertical-align: top;
    box-sizing: border-box;
    text-align: center;
    padding: 13px 15px;
    font-size: 18px;
    margin: -11px 0;
    margin: 0px 10px 10px 10px;
    &:hover {
      border: 1px solid #ee7023;
      background: #f35b1c;
    }
    &.backtBtn {
      float: left;
    }
    &.nextBtn {
      float: right;
    }
    &:disabled{
      background: gray;
      border: 1px solid #afadab;
    }
  }
}
</style>
