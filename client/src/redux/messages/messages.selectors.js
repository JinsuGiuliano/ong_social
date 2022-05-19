import { createSelector } from 'reselect';

const selectMessages = (state) => state.messages;

export const selectAllChats = createSelector(
  [selectMessages],
  messages => messages.chats
);


  export const selectIsFetching = createSelector(
    [selectMessages],
    messages =>  messages.isFetching
  );

  export const selectChatsForPreview = createSelector(
    [selectAllChats],
    (chats) => chats ? Object.keys(chats).map(key => chats[key]) : []
  );
  

  export const selectChatMessages = chatId =>
  createSelector(
    [selectChatsForPreview],
    (chats) => {
      console.log('selectChatMessages: ', chats)
      return (chats ? chats.find(e => e.chatId === chatId ): null)
    }
  );
