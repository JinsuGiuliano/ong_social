import React, { Fragment } from "react";
import Post from "../../../../components/posts/post/post.component";
const PostTab = ({posts, user}) => {

    return(

        <Fragment>
        {
            posts &&
            posts
                .filter(e => e.uid === user.id)
                .map( (p, idx) => (
                    <Post key={p.id + `${idx}`} data={p}/> 
                    ))
        }

        </Fragment>
    )
}

export default PostTab;