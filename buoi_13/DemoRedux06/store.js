// import { createStore } from "redux";
// import { countReducer } from "./screens/redux/Reducer";

// //Tạo ra một store quản lý state tập trung. Dùng chung cho tất cả màn hình project
// // createStore(Reducers)
// export const store = createStore(countReducer)
import { configureStore } from "@reduxjs/toolkit";
import demoReduxReducer from "./screens/reduxtoolkit/DemoReduxSlices";

export const store = configureStore({
    reducer:{
        // có thể khai báo nhiều reducer ở đây, mỗi reducer cách nhau dấu phẩy
        demoReduxReducer // demoReduxReducer : demoReduxReducer - cú pháp ES6 giống tên nhau để 1 cái
    }
})