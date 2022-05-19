import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../../utils/form-input/form-input.component'
import { messageCreateNewStart } from '../../../redux/messages/messages.actions';

import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { CloseIcon, InputInput, MessageInput, 
        SendNewMessageContainer, SendNewMessageTop, SendIcon } from './newMessage.styles';

const NewMessageForm = ({setNewMessage, newMessage, to}) => {
        
        const dispatch = useDispatch()
        const currentUser = useSelector(selectCurrentUser)
        const [text, setText ] = useState('')


        const handleChangeInput = event => {
            const { value } = event.target;
            setText(value);
          };

        const onSubmit = () => {
            const message = {
                text: text,
                sendBy: currentUser,
                createdAt: Date.now()
            }
            dispatch(messageCreateNewStart(message, to))
            setText('')
        } 
        
        return (
            <SendNewMessageContainer>
                <SendNewMessageTop>
                    <div><p style={{color:'white'}}onClick={() => setNewMessage(!newMessage)}>X</p></div>
                    <MessageInput>
                            <InputInput>
                                <FormInput   
                                    type='text'
                                    name='text'
                                    label='Write your message here...'
                                    handleChange={handleChangeInput}
                                    value={text}
                                    isPost
                                    required
                                />
                            </InputInput>
                    </MessageInput>
                    <div> <SendIcon onClick={() => onSubmit()}/> </div>
                </SendNewMessageTop>

            </SendNewMessageContainer>
        );
}

 

export default NewMessageForm;
