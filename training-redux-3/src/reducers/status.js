const initialState = false;
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      state = !state;
      return state;
    default:
      return state;
  }
};
export default myReducer;
