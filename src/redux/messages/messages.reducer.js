import MessageActionTypes from './messages.types'

const INITIAL_STATE = {
  chats: null,
  isFetching: false,
  errorMessage: undefined
};


export const  messagesReducer = (state = INITIAL_STATE, action) => {
  const { type , payload } = action;
  switch (type) {
    case MessageActionTypes.MESSAGE_FETCH_START:
    case MessageActionTypes.MESSAGE_CREATE_START:
      return {
        ...state,
        isFetching: true
      };
    case MessageActionTypes.MESSAGE_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        chats: payload
      };
    case MessageActionTypes.MESSAGE_FETCH_FAILURE:
    case MessageActionTypes.MESSAGE_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    case MessageActionTypes.MESSAGE_CREATE_SUCCESS:
         return {
          ...state,
            chats: state.chats.map( chat => chat.chatId === payload.chatId ? 
            {...chat, messages:[...chat.messages, payload] }
            : chat),
            isFetching: false,
        }
    default:
      return {...state};
  }
};
