import React, { Component } from "react";
import { createStore } from "redux";
export default class App extends Component {
  /* 

  */
  render() {
    //  khởi tạo các state ban đầu
    const initialState = {
      status: false,
      sort: {
        by: "name",
        value: 1 // 1: tăng, -1: giảm
      }
    };
    //  tham số thứ nhất là state, tham số thứ 2 là action
    // reducers sẽ trả về cái state mới và store sẽ cung cấp các state đó cho các components
    const myReducers = (state = initialState, action) => {
      // phân tích cái action dự vào type
      switch (action.type) {
        case "TOGGLE_STATUS":
          state.status = !state.status;
          return state;
        case "SORT":
          console.log("ACTION" + JSON.stringify(action));
          // cập nhật lại state
          // state.sort = {
          // action.sort.by, action.sort.value là tham số truyền vào ở actionSort
          // by, value là tham số của state cũ đã được khai báo ở initialState
          //   by: action.sort.by,
          //   value: action.sort.value
          // };
          const { by, value } = action.sort; // by = action.sort.by
          const { status } = state;
          return {
            status: status,
            sort: {
              by: by,
              value: value
            }
          };
        default:
          return state;
      }
      return state;
    };
    // tạo store
    const store = createStore(myReducers);
    // tạo ra các action
    // thực hiện thay đổi status
    const action = {
      // khai báo type
      type: "TOGGLE_STATUS"
    };
    // thực hiện công việc sắp xếp name Z-A
    const actionSort = {
      // khai báo type
      type: "SORT",
      // khai báo tham số truyền vào (nếu có ) để reducers xử lí
      sort: {
        by: "name",
        value: -1
      }
    };
    // dispatch action để gửi acton vào reducer cho reducer phân tích
    store.dispatch(action);
    store.dispatch(actionSort);
    console.log(store.getState());
    return <div>fdsfsdf</div>;
  }
}
