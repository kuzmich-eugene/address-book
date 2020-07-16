import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER
} from './types';

const handlers = {
  [ADD_USER]: (state, action) => ({...state, users: [...state.users, action.payload]}),
  [UPDATE_USER]: (state, action) => {
    const updatedUser = action.payload;
    const newState = state.users.filter(user => user.id !== updatedUser.id);
    return {
      ...state, users: [...newState, updatedUser]
    }
  },
  [DELETE_USER]: (state, action) => {
    const deletedUserId = action.payload;
    const newState = state.users.filter(user => user.id !== deletedUserId);
    return {
      ...state, users: newState
    }
  },
  DEFAULT: state => state
}

export const contactsReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}