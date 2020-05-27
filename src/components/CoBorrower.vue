<template>
  <div id="CoBorrowerData" @keyup="checkForm" @click="checkForm">
    <ValidationObserver ref="observer" v-slot="{ valid, invalid }">
      <h1 class="pageHeader">Co-borrower`s</h1>
      <div class="CoBorrowerDataWrapper">
        <div class="coBorrowersData">
          <div
            v-for="(borrower, index) in coBorrowers"
            v-bind:key="borrower.id"
          >
            <div class="dataWrapper">
              <h3 class="dataHeading">Co-applicant No. {{ index + 1 }}</h3>
              <label class="CoBorrowerData-label">First name *</label>
              <ValidationProvider
                name="first name"
                :rules="'required|notNumber'"
                v-slot="{ errors, invalid }"
              >
                <input
                  class="applicantInput"
                  v-model="coBorrowers[index].firstName"
                  @keyup="coBorrowers[index].nameInvalid = invalid"
                  type="text"
                />
                <label class="error-label">{{ errors[0] }}</label>
              </ValidationProvider>
            </div>
            <div v-if="!coBorrowers[index].nameInvalid" class="dataWrapper">
              <label class="CoBorrowerData-label">Last name *</label>
              <ValidationProvider
                name="last name"
                :rules="'required'"
                v-slot="{ errors, invalid }"
              >
                <input
                  class="applicantInput"
                  v-model="coBorrowers[index].lastName"
                  @keyup="coBorrowers[index].lastNameInvalid = invalid"
                  type="text"
                />
                <label class="error-label">{{ errors[0] }}</label>
              </ValidationProvider>
            </div>
            <div
              v-if="
                !coBorrowers[index].lastNameInvalid &&
                  !coBorrowers[index].nameInvalid
              "
              class="dataWrapper"
            >
              <label class="CoBorrowerData-label">Personal code*</label>

              <select
                v-model="coBorrowers[index].country"
                name="country"
                id="country"
              >
                <option value="LT">LT</option>
                <option value="SE">SE</option>
                <option value="DK">DK</option>
                <option value="NO">NO</option>
              </select>
              <ValidationProvider
                name="personal code"
                :rules="'min|required'"
                v-slot="{ errors }"
              >
                <input
                  class="applicantInput"
                  type="number"
                  v-model="coBorrowers[index].code"
                />
                <label class="error-label">{{ errors[0] }}</label>
              </ValidationProvider>
            </div>
            <div class="buttonsWrapper">
              <span @click="removeCoborrower(index)" class="removeAddButton">
                <i class="fa fa-times-circle"></i>
                <a>Remove Co-aplicant</a>
              </span>
            </div>
          </div>

          <div class="buttonsWrapper" :disabled="invalid">
            <span @click="addCoborrower()" class="removeAddButton">
              <i class="fa fa-plus-circle"></i>
              <a>Add Co-aplicant</a>
            </span>
          </div>
        </div>
      </div>
      <!-- <button type="submit" :disabled="invalid">Submit</button> -->
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";

extend("notNumber", value => {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  if (!isNumeric(value)) {
    return true;
  }

  return "The {_field_} field must not contain numbers";
});

extend("min", value => {
  if (value.length >= 5) {
    return true;
  }

  return "The {_field_} field must be at least five mumber long";
});

extend("required", {
  message: "The {_field_} must be filled",
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },

  watch: {
    coBorrowers: function() {
      this.checkForm();
    }
  },

  mounted() {
    this.checkForm();
  },
  computed: {
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    },
    computedObserver() {
      return this.$refs.observer.flags.valid;
    }
  },
  data() {
    return {
      componentKey: 0,
      value: "",
      required: true,
      firstname: "",
      password: "",
      repeatPassword: "",
      errors: [],
      coBorrowers: [],
      coBorrowersIndex: 0,
      education: null,
      position: null,
      maritialStatus: null,
      phone: null
    };
  },
  methods: {
    async checkForm() {
      const isValid = await this.$refs.observer.validate();
      if (!this.coBorrowers.length) {
        this.$store.dispatch("setCoBorrowerReady", true);
        this.$store.dispatch("setCoBorrowers", []);
      } else if (isValid && this.$refs.observer.flags.touched) {
        this.$store.dispatch("setCoBorrowerReady", true);
        this.$store.dispatch("setCoBorrowers", this.coBorrowers);
      } else {
        this.$store.dispatch("setCoBorrowerReady", false);
        this.$store.dispatch("setCoBorrowers", []);
      }
    },

    addCoborrower() {
      this.coBorrowers.push({
        id: this.coBorrowersIndex,
        firstname: "",
        lastName: "",
        country: "LT",
        code: "",
        nameInvalid: true,
        lastNameInvalid: true
      });
      this.coBorrowersIndex = this.coBorrowersIndex + 1;
    },

    removeCoborrower(index) {
      this.coBorrowers.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

#CoBorrowerData {
  .CoBorrowerDataWrapper {
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;

    .dataHeading {
      font-size: 25px;
      margin: 0px 0px 0px 10%;
    }
    .CoBorrowerData-label {
      display: inline-block;
      width: 25%;
      text-align: right;
      padding-top: 15px;
    }

    .dataWrapper {
      .error-label {
        display: inline-block;
        text-align: left;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-left: 25%;
        padding-left: 1%;
        font-size: 14px;
        color: unset;
        width: 100%;
      }
    }
    .buttonsWrapper {
      margin-left: 25%;
      padding-left: 1%;
      .removeAddButton {
        &:hover {
          cursor: pointer;
        }
      }
      .buttons-label {
        display: inline-block;
        width: 25%;
        text-align: right;
      }

      .error-label {
        display: inline-block;
        text-align: left;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-left: 25%;
        padding-left: 1%;
        font-size: 14px;
        color: unset;
        width: 100%;
      }
    }
  }
  @include responsive("-md") {
    .CoBorrowerDataWrapper {
      padding-top: 0px;
      padding-right: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
      .dataWrapper {
        .applicantInput {
          width: 100%;
        }
        .error-label {
          width: 100%;
          margin-left: 0%;
          text-align: left;
        }
        .buttons-label {
          width: 100%;
        }
      }
      .buttonsWrapper {
        margin-left: 0%;
        padding-left: 0%;
        .error-label {
          width: 100%;
          margin-left: 0%;
          text-align: left;
        }
        .buttons-label {
          width: 100%;
        }
      }
      .dataHeading {
        font-size: 15px;
        margin: 5px 0px 0px 0px;
        width: 100%;
      }

      .CoBorrowerData-label {
        width: 100%;
        text-align: left;
        font-size: 14px;
      }
    }
  }
}
</style>
