import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import FormInput from '../utils/form-input/form-input.component' 
import CustomButton from '../utils/custom-button/custom-button.component'
import { CreatePostContainer, PostUserIcon } from '../posts/post/post.styles'
import { messageCreateStart } from '../../redux/messages/messages.actions';

const SendMessage = ( destination) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const [ messageCaption, setMessageCaption ] = useState('')

   const handleSubmit = () => {
        const message = {
            caption: messageCaption,
            createdAt:Date.now(),
            a: currentUser.id,
            b:'JLRBCJqjLiU0KZBwQGD2xbULslN2'
        }
        dispatch(messageCreateStart(message, {...currentUser, ...destination}));
        setMessageCaption('')
      };
    
     const handleChange = event => {
        const { value } = event.target;
        setMessageCaption( value );
      };

    
    return(
        <div style={{ borderBottom: '1px solid #f8f8f8', padding:'10px 0px' }}>
        <CreatePostContainer >
            <div >
                <PostUserIcon src={ `${currentUser? currentUser.photo:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}` } alt=''/>
            </div>

        <div style={{width:'60%'}}>
            <FormInput
                name='caption'
                type='textarea'
                handleChange={handleChange}
                value={messageCaption}
                label='Write your message here...'
                required
                isPost
            />
        </div> 
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>                    
            <CustomButton isPost onClick={()=>handleSubmit()}> SEND </CustomButton>
        </div>
        </CreatePostContainer>
        </div>
    )
}


export default SendMessage;