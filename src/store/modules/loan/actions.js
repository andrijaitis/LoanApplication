export default {
  setFormSubmited ({ commit }, submitedState) {
    commit('setFormSubmited', submitedState)
  },
  setPersonalDataReady ({ commit }, submitedState) {
    commit('setPersonalDataReady', submitedState)
  },
  setCoBorrowerReady ({ commit }, submitedState) {
    commit('setCoBorrowerReady', submitedState)
  },
  setCoBorrowers ({ commit }, submitedState) {
    commit('setCoBorrowers', submitedState)
  },
  setPersonalData ({ commit }, submitedState) {
    commit('setPersonalData', submitedState)
  },
  setCalcState ({ commit }, submitedState) {
    commit('setCalcState', submitedState)
  },
  setCalcData ({ commit }, submitedState) {
    commit('setCalcData', submitedState)
  }
}
