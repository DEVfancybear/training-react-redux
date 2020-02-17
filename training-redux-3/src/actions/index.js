import * as types from "../constants/ActionTypes";
//action k có tham số
export const status = () => {
  return {
    type: types.TOGGLE_STATUS
  };
};
//action có tham số
export const sort = sort => {
  return {
    type: types.SORT,
    sort
  };
};
