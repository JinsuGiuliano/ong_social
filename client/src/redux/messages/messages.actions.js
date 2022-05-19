import messageActionTypes from "./messages.types";

// Fetch messages
export const messageFetchStart = () => ({
    type: messageActionTypes.MESSAGE_FETCH_START,
  });
  
export const messageFetchSuccess = message => ({
    type: messageActionTypes.MESSAGE_FETCH_SUCCESS,
    payload: message
});

export const messageFetchFailure = error => ({
    type: messageActionTypes.MESSAGE_FETCH_FAILURE,
    payload: error
});

// Create message
export const messageCreateStart = (message, to, chatId) => ({
    type: messageActionTypes.MESSAGE_CREATE_START,
    payload: { message, to, chatId }
  });
  
export const messageCreateSuccess = message => ({
    type: messageActionTypes.MESSAGE_CREATE_SUCCESS,
    payload: message
});

export const messageCreateFailure = error => ({
    type: messageActionTypes.MESSAGE_CREATE_FAILURE,
    payload: error
});


// Create New message
export const messageCreateNewStart = (message, to) => ({
    type: messageActionTypes.MESSAGE_CREATE_NEW_START,
    payload: { message, to }
  });
  
export const messageCreateNewSuccess = message => ({
    type: messageActionTypes.MESSAGE_CREATE_NEW_SUCCESS,
    payload: message
});

export const messageCreateNewFailure = error => ({
    type: messageActionTypes.MESSAGE_CREATE_NEW_FAILURE,
    payload: error
});

