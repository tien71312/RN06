import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./DemoReduxToolkitThunk";

initialState = {
    count:0
}
//Tạo reducer và action thông qua createSlice
// Chia làm 2 loại action
// Action (Không xử lý bất đồng bộ) => action này được tạo ở reducers và phải được export ở slice khi cần được sử dụng
// Action (có xử lý bất đồng bộ) => action này sẽ được tạo Thunk và sẽ được lắng nghe ở extraReducers

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
    },
    extraReducers: builder => {
        // Dùng để lắng nghe giá trị trả về từ Thunk
        builder.addCase(getProduct.pending,(state,action)=>{

        }).addCase(getProduct.fulfilled,(state,action)=>{
            console.log('Thunk')
            console.log(state)
            console.log(action)
        })
    }
})
//Export action trong slice cho UI page sử dụng
export const {tangCount,giamCount} = demoReduxToolkitSlice.actions
export default demoReduxToolkitSlice.reducer