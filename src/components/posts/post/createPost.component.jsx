import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postCreateStart } from '../../../redux/posts/posts.actions'
import { selectCurrentUser } from '../../../redux/user/user.selectors'

import FormInput from '../../utils/form-input/form-input.component'
import CustomButton from '../../utils/custom-button/custom-button.component'
import { CreatePostContainer } from './post.styles'
import { PostUserIcon } from './post.styles'

const CreatePost = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const [ postCaption, setPostCaption ] = useState('')

 
   const handleSubmit = async event => {
        event.preventDefault();
        const post = {
            caption: postCaption,
            creation: Date.now(),
            downloadURL:'',
            likesCount:0        
        }
        dispatch(postCreateStart(post));
      };
    
     const handleChange = event => {
        const { value, name } = event.target;
    
        setPostCaption( value );
      };
    
    return(
        <CreatePostContainer >
        <div>
            <PostUserIcon src={ `${currentUser? currentUser.photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
        </div>
        <div>
            <FormInput
                name='caption'
                type='text'
                handleChange={handleChange}
                value={postCaption}
                label='Write here your opinion...'
                required
                isPost
                />
        </div>
        <div>
            <CustomButton isPost onClick={()=>handleSubmit}> Post It! </CustomButton>
        </div>
           
        </CreatePostContainer>
    )
}


export default CreatePost;