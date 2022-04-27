import { TOGGLE_DARKTHEME } from './theme.action';
const INITIAL_STATE = { 
    darkThemeEnabled: false 
}

// const UpdateItem = (keyValue, newKey, newValue) =>
// {
//   keyValue.Key = newKey;
//   keyValue.Value = newValue; 
// }

export const themeReducer = (state = INITIAL_STATE, action) => {
  const { type  } = action;
  switch (type) {
    case TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};