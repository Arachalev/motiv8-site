import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice(
    {
        name:"blog",
        initialState:{
            items:[],

        },
        reducers:
        {
            replaceBlog(state, action)
            {
                state.items = action.payload.items
            }
        }
    }
)



export default blogSlice;
export const blogActions = blogSlice.actions