const initialState = {
  by: "status",
  value: 1
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      let { by, value } = action.sort;
      return {
        sort: {
          // state mới được reducer là sort phân tích
          by: by,
          value: value
        }
      };
    default:
      return state;
  }
};
export default myReducer;
