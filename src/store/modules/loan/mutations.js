export default {
  setFormSubmited: (state, formState) => (state.submited = formState),
  setPersonalDataReady: (state, personalDataState) => (state.personalDataState = personalDataState),
  setCoBorrowerReady: (state, coBorrowersDataState) => (state.coBorrowersDataState = coBorrowersDataState),
  setCoBorrowers: (state, coBorrowers) => (state.coBorrowers = coBorrowers),
  setPersonalData: (state, personalData) => (state.personalData = personalData),
  setCalcState: (state, calcState) => (state.calcState = calcState),
  setCalcData: (state, calcData) => (state.calcData = calcData)

}
