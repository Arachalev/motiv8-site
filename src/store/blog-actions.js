import { blogActions } from "./blog-slice";
import { uiActions } from "./ui-slice";

export const fetchBlogData = ()=>{

    return async (dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch("");
            if(!response.ok)
            {
                throw new Error("couldn't fetch blog data")
            }
            const data = await response.json();
            return data;
        }

        try{
            const blogData = await fetchData();
            dispatch(
                blogActions.replaceBlog({
                    items:blogData.items || []
                }),
                uiActions.showBlog({
                    status:true
                })
            )
        } catch (error)
        {
            dispatch(
                uiActions.showBlog({
                    status:false
                }
                    
                )

            )
        }

    }
}