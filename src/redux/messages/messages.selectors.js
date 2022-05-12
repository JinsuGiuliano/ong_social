import { createSelector } from 'reselect';

const selectMessages = (state) => state.messages;

export const selectAllChats = createSelector(
  [selectMessages],
  messages =>  {
    console.log('selectAllChats: ', messages.chats)
    return(messages.chats)}
);

export const selectUserProfileMessages = username =>
  createSelector(
    [selectAllChats],
    (messages) => {
      console.log(username);
      return (messages ? messages.find(e => e.uid === username): null)
    }
  );

  export const selectIsFetching = createSelector(
    [selectMessages],
    messages =>  messages.isFetching
  );

  export const selectChatsForPreview = createSelector(
    [selectAllChats],
    (chats) => chats ? Object.keys(chats).map(key => chats[key]) : []
  );
  