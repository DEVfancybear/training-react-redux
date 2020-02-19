// import các hằng số đã được khai báo
import * as types from "../constants/ActionTypes";
/* 
  - thuộc tính type là bắt buộc trong action để mô tả cách thay đổi state
  - tham số truyền vào thứ 2 là dữ liệu đi theo có thể có, có thể không
  - ví dụ
  action để xóa một item thì bạn cần làm như sau:
  export const deleteItem = id => {
  return {
    type: types.DELETE_ITEM,
    id
  };
  => điều này cũng tương tự với việc dùng React thuần thì phải khai báo hàm function deleteItem rồi truyền vào 1 cái id và trỏ hàm này tới nút bấm onClick
  là xóa tên components
  deleteItem = id => {
    // code (phần code này sẽ do reducers xử lí)
  }
  //  truyền hàm xóa vào nút button
  <button onClick = {()=> this.deleteItem(id)}></button>
};
*/
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
