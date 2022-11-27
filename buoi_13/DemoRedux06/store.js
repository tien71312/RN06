import { createStore } from "redux";
import { countReducer } from "./screens/redux/Reducer";

//Tạo ra một store quản lý state tập trung. Dùng chung cho tất cả màn hình project
// createStore(Reducers)
export const store = createStore(countReducer)