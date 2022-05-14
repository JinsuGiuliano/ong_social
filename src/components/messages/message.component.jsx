import React from "react";
import { MessageContainer, Text, MessageMainContainer} from "./message.styles";

const Message =  ({text, current}) => {

    return(
        <MessageMainContainer current={current}>
            <MessageContainer current={current}>
                <div>
                    <Text >{text}</Text>
                </div>
            </MessageContainer>
        </MessageMainContainer>

    )
}

export default Message;