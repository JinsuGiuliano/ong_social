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
export const messageCreateStart = (message, user) => ({
    type: messageActionTypes.MESSAGE_CREATE_START,
    payload: { message, user }
  });
  
export const messageCreateSuccess = message => ({
    type: messageActionTypes.MESSAGE_CREATE_SUCCESS,
    payload: message
});

export const messageCreateFailure = error => ({
    type: messageActionTypes.MESSAGE_CREATE_FAILURE,
    payload: error
});
