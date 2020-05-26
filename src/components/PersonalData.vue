<template>
  <div id="PersonalData">
    <!-- {{ $v }} -->
    <!-- {{ $store.getters.getPersonalData }} -->
    <h1>Personal data of applicant</h1>
    <div class="personalDataWrapper">
      <div class="extendedData">
        <h1>Extended data</h1>
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
              <option value="Primary">Specialist/Offise worker</option>
              <option value="Primary">Superior specialist</option>
              <option value="Primary">Middle manager</option>
              <option value="Primary">Owner</option>
              <option value="Primary">Student</option>
              <option value="Primary">Pensioner</option>
              <option value="Primary">HouseWife</option>
              <option value="Primary">Unemployed</option>
              <option value="Primary">Private entrepreneur</option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="$v.position.$dirty" class="maritialStatus">
        <h1>Personal data</h1>
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
        <h1>Spouse data</h1>
        <div class="dataWrapper">
          <label class="personalData-label">Spouse income *</label>
          <select
            @click="checkForm"
            v-model.trim="$v.spouseIncome.$model"
            name="spouseIncome"
            id="spouseIncome"
          >
            <option value="500">less then 1000</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">more than 2000</option>
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
        <h1>Contact data</h1>
        <div class="dataWrapper">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.phone.$error }"
          >
            <label class="personalData-label">phone *</label>
            <input
              @keyup="checkForm"
              class="form__input"
              type="number"
              v-model.trim="$v.phone.$model"
            />
          </div>
          <label class="personalData-label"></label>
          <div class="error-label" v-if="!$v.phone.required && $v.phone.$dirty">
            phone is required.
          </div>
          <div class="error-label" v-if="!$v.phone.minLength">
            phone must have at least
            {{ $v.phone.$params.minLength.min }} numbers.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ValidationProvider, extend } from "vee-validate";
// import { required } from "vee-validate/dist/rules";
import { required, minLength, requiredUnless } from 'vuelidate/lib/validators'

export default {
  computed: {
    validation: function () {
      return this.$v.$invalid
    },

    isOptional () {
      return this.maritialStatus !== 'Married' // some conditional logic here...
    }
  },
  mounted () {
    this.checkForm()
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
      required: requiredUnless('isOptional')
    },
    phone: {
      required,
      minLength: minLength(5)
    }
  },

  // components: {
  //   ValidationProvider,
  // },
  data () {
    return {
      errors: [],
      education: null,
      position: null,
      spouseIncome: null,
      maritialStatus: null,
      phone: null,
    }
  },
  methods: {
    checkForm () {
      this.$store.dispatch('setPersonalDataReady', this.$v.$invalid)
      this.$store.dispatch('setPersonalData', {
        education: this.education,
        position: this.position,
        maritialStatus: this.maritialStatus,
        phone: this.phone
      })
    }
  }
}
</script>

<style lang="scss">
#PersonalData {
  h1 {
    margin: 50px;
    color: #512b2b;
  }

  .personalDataWrapper {
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    .personalData-label {
      display: inline-block;
      width: 25%;
      text-align: right;
      padding-top: 15px;
      // padding-bottom: 50px;
      color: #512b2b;
    }
    .dataWrapper {
      .buttons-label {
        display: inline-block;
        width: 25%;
        text-align: right;
        // padding-top: 15px;
        // padding-bottom: 50px;
        color: #512b2b;
      }
      .error-label {
        display: inline-block;
        width: 25%;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .getLoan {
    h1 {
      font-size: 20px;
      margin: 32px;
    }
    .personalDataWrapper {
      padding-top: 0px;
      padding-right: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
      .personalData-label {
        width: 100%;
        text-align: left;
        font-size: 14px;
      }
    }
  }
}
</style>
