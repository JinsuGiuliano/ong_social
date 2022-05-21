import React, { Fragment } from "react";
import Post from "../../../../components/posts/post/post.component";
const PostTab = ({posts, user}) => {
    console.log('user',user)
    return(

        <Fragment>
        {
            posts &&
            posts
                .map( (p, idx) => (
                    <Post key={idx} data={{...p, uid:user.uid}}/> 
                    ))
        }
        </Fragment>
    )
}

export default PostTab;