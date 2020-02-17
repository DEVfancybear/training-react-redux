import React, { Component } from "react";
import * as actions from "./actions/index";
import { createStore } from "redux";
import myReducer from "./reducers/index";
export default class App extends Component {
  render() {
    const store = createStore(myReducer);
    console.log("Default", store.getState());
    store.dispatch(actions.status());
    console.log("TOGGLE_STATUS", store.getState());
    store.dispatch(
      actions.sort({
        // có 1 tham số là 1 obj
        // thức hiện sắp xếp từ Z-A
        by: "name",
        value: -1
      })
    );
    console.log("SORT", store.getState());
    return <div>dsafdsad</div>;
  }
}
