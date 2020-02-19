// import các hằng số 
import * as types from "../constants/ActionTypes"
/*  khai báo state ban đầu , tương tự như khai báo state tại components cha, ví dụ:
 this.state = {
   by: "status",
  value: 1
 }
*/
const initialState = {
  by: "status",
  value: 1
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    
    /*  
    Khai báo hằng số action thực hiện hành động đó: ví dụ xóa item thì khái báo như sau:
    case types.DELETE_ITEM
     - sau đó sẽ thực hiện xử lí hành động action xóa item , cũng tương tự với việc dùng React thuần, ví dụ:
     deleteItem = (id) => {
       // xử lí xóa item
      const filteredItem = this.state.items.filter(item => item.id !== id);
      //set lại state 
      this.setState({
        items: filteredItem
      })
    }
    */
    case types.SORT:
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
