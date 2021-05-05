import InitialState from "./InitialState";

const rootReducer = (state = InitialState, action) => {
  console.log(action);
};

export default rootReducer;
