import React, { Component } from "react";
import * as actions from "./actions/index";
import { createStore } from "redux";
// kết nối với store
import { connect } from "react-redux";
import myReducer from "./reducers/index";
class App extends Component {
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
/* Khi đã hoàn thành các bước khai báo actions và xử lí chúng tại reducers thì chúng ta cần lên store lấy chúng về thông qua props.
Để có thể lấy các state, actions thì ta cần dispatch chúng để chuyển chúng thành props thì mới có thể sử dụng dc.:
- Sử dụng hàm mapStateToProps để chuyển state trên store thành props (tham số thường là: state):
const mapStateToProps =state => {
  return {
    //code
  }
}
- Sử dụng hàm mapDispatchToProps để chuyển actions thành props  (tham số thường là: dispatch,props)
const mapDispatchToProps = (dispatch,props) => {
  return {
    //code
  }
}
=> connect store : export default connect(mapStateToProps, mapDispatchToProps)(App)



- Ví dụ: Xử lí xóa một phần tử
+ Lúc này ta cần action deleteItem đã được khai báo ở actions/index.js, import nó là: import {deleteItem} from "./actions/index"
+ Ta cần dispatch action này để chuyển thành props
const mapDispatchToProps = (dispatch,props) => {
  return {
    deleteItem: id => {
      dispatch(deleteItem(id))
      //dispatch(actions)   (cần phải import actions vào components để nhận hàm xử lí hành động)
    }
  }
} ( => tương tự với mapStateToProps khac là muốn lấy state thì phải lấy thông qua reducers đã được combine )



=> Tương tự với việc truyền hàm hay state từ components cha xuống con, ví dụ:
componetns cha có hàm xử lí xóa: deleteItem = id => {
  //code
}
, lúc này ta cần truyền hàm này hoặc state xuống components con để nó có thể nhận thông qua props, ví dụ components con tên là Item thì để truyền ta cần import
components con Item vào components cha là App đang có hàm xử lí xóa phần tử và truyền hàm đó vào components con để nó có
thể nhận dc props (this.props.deleteItem(id) xóa phần tử, ta truyền như sau làm:
<Item deleteItem={id=>this.deleteItem(id)}/>
nhưng nếu ta truyền nhiều tầng components mới tới components đích thì sẽ rất rối và khó quản lí nên mới sinh ra redux ^^


Vì thế sau khi hoàn thành các bước với Redux thì component con <Item/> nhận dc props là this.props.deleteItem(id) khi ta connect lên store và dispatch
actions deleteItem thay vì phải truyền từ components cha là App vào => giúp cho dễ quản lí luồng dữ liệu hơn


*/
//kết nối components lên store (nếu cần tới các props là state và actions)
export default App;
