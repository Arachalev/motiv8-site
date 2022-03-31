import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState:{blogData:false},
    reducers:{
        showBlog(state,action){
            state.blogData={
                status:action.payload.status

            }
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;