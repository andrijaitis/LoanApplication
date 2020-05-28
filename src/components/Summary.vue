<template>
  <div id="PersonalData">
    <h1 class="pageHeader">Summary</h1>
    <div v-if="formsReady" class="tabblesWrapper">
      <h2>Personal Data</h2>
      <table>
        <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Education</td>
          <td>{{ getFullPersonalData.education }}</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>{{ getFullPersonalData.position }}</td>
        </tr>
        <tr>
          <td>Maritial status</td>
          <td>{{ getFullPersonalData.maritialStatus }}</td>
        </tr>
        <tr>
          <td>Phone}</td>
          <td>{{ getFullPersonalData.phone }}</td>
        </tr>
      </table>

      <h2>Loan</h2>
      <table>
              <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Loan ammount</td>
          <td>{{ getCalcData.loanValue }}</td>
        </tr>
        <tr>
          <td>Loan period</td>
          <td>{{ getCalcData.termValue }}</td>
        </tr>
      </table>

      <div v-if="getCoBorrowers.length">
        <h2>Co-applicants</h2>
        <table
          v-for="(borrower, index) in getCoBorrowers"
          v-bind:key="borrower.id"
        >
          <h3 for="">Co-applicant No. {{ index + 1 }}</h3>
                <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
          <tr>
            <td>First name</td>
            <td>{{ borrower.firstName }}</td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>{{ borrower.lastName }}</td>
          </tr>
          <tr>
            <td>Code</td>
            <td>{{ borrower.country }}{{ borrower.code }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getCoBorrowers",
      "getFullPersonalData",
      "getCalcData",
      "getPersonalDataState",
      "getCoBorrowersState"
    ]),
    percentage: function() {
      return (100 / this.barData.totalPages) * this.barData.pageNumber;
    },
    formsReady: function() {
      return this.getCoBorrowersState && !this.getPersonalDataState;
    }
  },
  data() {
    return {
      // formsReady: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
#PersonalData {
  h3 {

    color: $secondary-color;
  }
  .tabblesWrapper {
    padding-top: 0px;
    padding-right: 10%;
    padding-bottom: 10%;
    padding-left: 10%;
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      width: 25%;
    }

    // tr:nth-child(even) {
    //   background-color: #dddddd;
    // }
  }
@include responsive("-md") {
  table{
    font-size:      12px;
  }
  h2{
    font-size: 15px;
  }
  h3{
    font-size: 3vw;
  }

    .tabblesWrapper {
      padding-top: 0px;
      padding-right: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
      
    }
  }
}
</style>
