import InitialState from "./InitialState";

const rootReducer = (state = InitialState, action) => {
  console.log(state);
};

export default rootReducer;
