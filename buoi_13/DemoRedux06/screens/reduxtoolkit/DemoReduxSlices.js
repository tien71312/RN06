import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./DemoReduxToolkitThunk";

initialState = {
    count:0
}
const demoReduxToolkitSlice= createSlice({
    name:'demoReduxSlice', //Tên Slice không đặt  trùng
    initialState: initialState, // Khởi tạo giá trị cho sate trên store dùng chung
    reducers: {
        // Khai báo action ở đây
        // Cú pháp => tenAction: (state_tren_store_dung_chung,action)=>{}
        tangCount: (state, action) => {
            console.log(state)
            console.log(action.payload.des)
            state.count = state.count + 1
        },
        giamCount: (state,action) => {
            state.count = state.count - 1
        }
    }
})
//Export action trong slice cho UI page sử dụng
export const {tangCount,giamCount} = demoReduxToolkitSlice.actions
export default demoReduxToolkitSlice.reducer