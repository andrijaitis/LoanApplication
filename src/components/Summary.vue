<template>
  <div id="PersonalData">
    <h1>Summary</h1>

    <div class="tabblesWrapper">
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
          <th>Loan ammount</th>
          <th>{{ getCalcData.loanValue }}</th>
        </tr>
        <tr>
          <th>Loan period</th>
          <th>{{ getCalcData.termValue }}</th>
        </tr>
      </table>

      <h2>Co borrowers</h2>
      <table
        v-for="(borrower, index) in getCoBorrowers"
        v-bind:key="borrower.id"
      >
        <h3 for="">Co-applicant {{ index + 1 }}</h3>
        <tr>
          <th>First name</th>
          <th>{{ borrower.firstName }}</th>
        </tr>
        <tr>
          <th>Last name</th>
          <th>{{ borrower.lastName }}</th>
        </tr>
        <tr>
          <th>Code</th>
          <th>{{ borrower.country }}{{ borrower.code }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCoBorrowers", "getFullPersonalData", "getCalcData"]),
    percentage: function() {
      return (100 / this.barData.totalPages) * this.barData.pageNumber;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#PersonalData {
  h1 {
    margin: 50px;
    color: #512b2b;
  }
  .tabblesWrapper {
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
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
      @media screen and (max-width: 767px) {
      h1 {
        font-size: 20px;
        margin: 32px;
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
