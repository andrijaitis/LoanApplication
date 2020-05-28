//  Here will test of the mutations
//  Hopefully at the time this task is viewed, I already wrote most of the tests
// import store from "@/store";
// import mutations from "@/store/modules/loan/mutations";

describe("initial state", () => {
  it("application should not be submitted", () => {
    const state = {
      submited: false
    };
    expect(state.submited).toBe(false);
  });
});
