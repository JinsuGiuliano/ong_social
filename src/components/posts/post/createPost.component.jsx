import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FileUploader } from "react-drag-drop-files";

import { postCreateStart } from '../../../redux/posts/posts.actions'
import { selectCurrentUser } from '../../../redux/user/user.selectors'

import FormInput from '../../utils/form-input/form-input.component'
import CustomButton from '../../utils/custom-button/custom-button.component'
import { CreatePostContainer, ImageIcon } from './post.styles'
import { PostUserIcon } from './post.styles'

const CreatePost = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const [ postCaption, setPostCaption ] = useState('')
    const [ postFile, setPostFile ] = useState(null)
    const [ showDnD, setShowDnD ] = useState(false)

    const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

   const handleSubmit = () => {
        const post = {
            caption: postCaption,
            downloadURL:'',
            likesCount:0,
            file:postFile,      
        }
        dispatch(postCreateStart(post, currentUser));
        setPostCaption('')
        setPostFile(null)
      };
    
     const handleChange = event => {
        const { value } = event.target;
        setPostCaption( value );
      };

    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const FileHandleChange = file => {
        console.log('fileUploaded: ', file)
        setPostFile(file)
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
                value={postCaption}
                label='Write your opinion...'
                required
                isPost
            />
        </div> 
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>                    
            <CustomButton isPost onClick={()=>handleSubmit()}> Post It! </CustomButton>
        </div>
        </CreatePostContainer>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'100%'}}>
        <ImageIcon onClick={()=>setShowDnD(!showDnD)} />
        <div>
            <div style={!showDnD?{display: 'none'}:{}}>
             <FileUploader
                type="file"
                handleChange={FileHandleChange}
                name="file" types={fileTypes}
            />
            </div>
           
        </div>
       
</div>
        </div>
    )
}


export default CreatePost;