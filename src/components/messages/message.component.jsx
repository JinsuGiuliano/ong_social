import React from "react";
import { MessageContainer, Text, MessageMainContainer} from "./message.styles";

const Message =  ({data, current}) => {

    return(
        <MessageMainContainer current={current}>
            <MessageContainer current={current}>
                <div>
                    <Text >{data.text}</Text>
                </div>
            </MessageContainer>
        </MessageMainContainer>

    )
}

export default Message;