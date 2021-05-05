import InitialState from "./InitialState";

// eslint-disable-next-line
const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
