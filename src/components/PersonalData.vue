<template>
  <div id="PersonalData">
    <h1 class="pageHeader">Personal data of applicant</h1>
    <div class="personalDataWrapper">
      <div class="extendedData">
        <h1 class="dataHeading">Extended data</h1>
        <div class="dataWrapper">
          <label class="personalData-label">Education *</label>
          <select
            @click="checkForm"
            v-model.trim="$v.education.$model"
            name="education"
            id="education"
          >
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Vocational">Vocational</option>
            <option value="College">College</option>
            <option value="Higher">Higher</option>
          </select>
        </div>
        <div v-if="$v.education.$dirty" class="dataWrapper">
          <div class="personalData">
            <label class="personalData-label">Position held *</label>
            <select
              @click="checkForm"
              v-model.trim="$v.position.$model"
              name="education"
              id="education"
            >
              <option value="Primary">Worker</option>
              <option value="pecialist/Offise worker"
                >Specialist/Offise worker</option
              >
              <option value="Superior specialist">Superior specialist</option>
              <option value="Middle manager">Middle manager</option>
              <option value="Owner">Owner</option>
              <option value="Student">Student</option>
              <option value="Pensioner">Pensioner</option>
              <option value="HouseWife">HouseWife</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Private entrepreneur">Private entrepreneur</option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="$v.position.$dirty" class="maritialStatus">
        <h1 class="dataHeading">Personal data</h1>
        <div class="dataWrapper">
          <label class="personalData-label">Maritial status *</label>
          <select
            @click="checkForm"
            v-model.trim="$v.maritialStatus.$model"
            name="education"
            id="education"
          >
            <option value="Primary">Single</option>
            <option value="Married">Married</option>
            <option value="Common">Common law marriage</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow/Widower</option>
          </select>
        </div>
      </div>
      <div v-if="$v.maritialStatus.$model == 'Married'" class="maritialStatus">
        <h1 class="dataHeading">Spouse data</h1>
        <div class="dataWrapper">
          <label class="personalData-label">Spouse income *</label>
          <select
            @click="checkForm"
            v-model.trim="$v.spouseIncome.$model"
            name="spouseIncome"
            id="spouseIncome"
          >
            <option value="500">Less than 1000 €</option>
            <option value="1000">1000 €</option>
            <option value="2000">2000 €</option>
            <option value="3000">More than 2000 €</option>
          </select>
        </div>
      </div>

      <div
        v-if="
          ($v.maritialStatus.$dirty && isOptional) ||
            ($v.spouseIncome.$dirty && !isOptional)
        "
        class="contactData"
      >
        <h1 class="dataHeading">Contact data</h1>
        <div class="dataWrapper">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.phone.$error }"
          >
            <label class="personalData-label">Phone *</label>
            <input
              @keyup="checkForm"
              class="form__input"
              type="number"
              v-model.trim="$v.phone.$model"
            />
          </div>
          <!-- <label class="personalData-label"></label> -->
          <div class="error-label" v-if="!$v.phone.required && $v.phone.$dirty">
            Phone is required.
          </div>
          <div class="error-label" v-if="!$v.phone.minLength">
            Phone must have at least
            {{ $v.phone.$params.minLength.min }} digits.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, requiredUnless } from "vuelidate/lib/validators";

export default {
  computed: {
    validation: function() {
      return this.$v.$invalid;
    },

    isOptional() {
      return this.maritialStatus !== "Married"; // some conditional logic here...
    }
  },
  mounted() {
    this.checkForm();
  },
  validations: {
    education: {
      required
    },
    position: {
      required
    },
    maritialStatus: {
      required
    },
    spouseIncome: {
      required: requiredUnless("isOptional")
    },
    phone: {
      required,
      minLength: minLength(5)
    }
  },

  data() {
    return {
      errors: [],
      education: null,
      position: null,
      spouseIncome: null,
      maritialStatus: null,
      phone: null
    };
  },
  methods: {
    checkForm() {
      this.$store.dispatch("setPersonalDataReady", this.$v.$invalid);
      this.$store.dispatch("setPersonalData", {
        education: this.education,
        position: this.position,
        maritialStatus: this.maritialStatus,
        phone: this.phone
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
#PersonalData {
  .personalDataWrapper {
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    .dataHeading {
      font-size: 25px;
      margin: 0px 0px 0px 10%;
    }
    .personalData-label {
      display: inline-block;
      width: 25%;
      text-align: right;
      padding-top: 15px;
    }
    .dataWrapper {
      .buttons-label {
        display: inline-block;
        width: 25%;
        text-align: right;
      }
      .error-label {
        display: inline-block;
        text-align: right;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-left: 25%;
        padding-left: 1%;
        font-size: 14px;
      }
    }
  }
  @include responsive("-md") {
    .personalDataWrapper {
      padding-top: 0px;
      padding-right: 32px;
      padding-bottom: 32px;
      padding-left: 32px;

      .dataWrapper {
        .error-label {
          width: 100%;
           margin-left: 0%;
           text-align: left;
        }
      }

      .dataHeading {
        font-size: 15px;
        margin: 5px 0px 0px 0px;
        width: 100%;
      }

      .personalData-label {
        width: 100%;
        text-align: left;
        font-size: 14px;
      }
      select {
        width: 100%;
      }
      input {
        width: 100%;
      }
    }
  }
}
</style>
