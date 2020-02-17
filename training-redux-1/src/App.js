import React, { Component } from "react";

export default class App extends Component {
  /*  Cấu trúc của mốt store Redux
    - Action: là những chỉ thị với thuộc tính bắt buộc là type:
    + type: tên chỉ thị (bắt buộc phải có)
    + item: phần tử thao tác
    + action k trực tiếp thực hiện mà chỉ đưa ra chỉ thị
    + reducer là người thực hiện chi tiết chỉ thị của action



    - Reducer: là một hành động 
    + hành động này trả về một state
    + có 2 tham số 
    1: old state ( state ban đầu khai báo)
    2: chỉ thị (action) => action dùng để thay đổi state cũ và tính ra state mới
    + Khi khao báo reducer nhận vào tham số là action thì
    1: action đó có thể đặt tên được thông qua action.type
    2: tác dụng của action là chỉ thị để tính ra state tiếp theo 



    - State: trạng thái của component




    - Store: là một đối tượng quán lí reducer và state, vì state là biến private không thể thay đổi trực tiếp được mà
     thông qua đói tượng quản lí của nó là store. Để bắt đầu làm việc với store ta cần:
     + Khởi tạo store
     ví dụ:  var store1 = redux.createStore(reducer1)
    + truy nhập vào store:
      ví dụ: store1.getState()



    - Hàm Subscribe trong store: 
    + Subscribe = theo dõi
    + Tác dụng: 
    1: Được kích hoạt mỗi khi state thay đổi
    2: state này là state của state và cũng chính là state của ứng dụng
    */
  render() {
    let redux = require("redux");
    // state ban đầu
    let oldState = {
      num: ["man hinh", "chuot", "ban phim"],
      editStatus: true
    };
    let reducer1 = (state = oldState, action) => {
      // đặt tên cho action bằng action.type
      switch (action.type) {
        //thay đổi state editStatus thành false
        case "CHANGE_EDIT_STATUS":
          return { ...state, editStatus: !state.editStatus };
        // thêm 1 phần tử mới là Tai nghe vào sau "ban phim"
        case "ADD_NEW":
          // copy state , ghi đè thuộc tính num rồi copy thuộc tính num và ghi đè thêm thuộc tính mới
          return { ...state, num: [...state.num, action.newItem] };
        case "DELETE_ITEM":
          return {
            ...state,
            num: state.num.filter((value, i) => i !== action.index)
          };
        default:
          return { ...state };
      }
    };
    var store1 = redux.createStore(reducer1);
    store1.subscribe(() =>
      console.log("State thay đổi" + JSON.stringify(store1.getState()))
    );
    // console.log(store1.getState());
    // thực thi action
    store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
    // console.log(store1.getState());
    store1.dispatch({ type: "ADD_NEW", newItem: "Tai nghe" });
    // console.log(store1.getState());
    store1.dispatch({ type: "DELETE_ITEM", index: 0 });
    // console.log(store1.getState());

    return <div></div>;
  }
}
