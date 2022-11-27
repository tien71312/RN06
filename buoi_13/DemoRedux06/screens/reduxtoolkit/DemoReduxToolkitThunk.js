import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
    'product/getProduct', // tên của thunk
    async (params) =>{
        console.log(params) 
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()
        return json.content
    }
) 