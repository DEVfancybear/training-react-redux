import status from "./status";
import sort from "./sort";
import { combineReducers } from "redux";
/* import các reducers để đưa nó lên store quản lí */
const myReducer = combineReducers({
  status,
  sort
});
export default myReducer;
