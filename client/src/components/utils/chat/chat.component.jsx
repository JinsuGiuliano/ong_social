import React,{ useEffect, useState} from "react";
import { addMessage } from "../../../firebase/chat/addMessage";
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage } from 'react-chat-widget';


export default function Chat({username}) {
    const [message, setMessage] = useState('')

    useEffect( () => {   
         
        username?
            addResponseMessage(`Welcome ${JSON.stringify(username.displayName)} to this **awesome** chat!`)
        :
            console.log(username)   



    },[username])

    const handleNewUserMessage = (newMessage) => {
        // Now send the message throught the backend API
        setMessage(newMessage);
        console.log(newMessage)
        addMessage(username, newMessage);
        if(message === "Hola"){
             addResponseMessage('Hola');
        }
    };

    return (
        <div>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title="GG SHOP"
                subtitle="chat with us right now!"
            />
        </div>
    );
}
