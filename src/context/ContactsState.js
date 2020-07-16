import React, {useReducer, useState} from 'react';

import { ContactsContext } from './contactsContext';
import { contactsReducer } from './contactsReducer';
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER
} from './types';

export const ContactsState = ({children}) => {
  const initialState = {
    users: [
      {id: 1, name: 'Alex', surname: 'Kazakevich', email: '123e34@tut.by'},
      {id: 2, name: 'Yauh', surname: 'Kuzm', email: 'asd@gmail.com'}
    ],
  }

  const getState = () => {
    const storageLocal = JSON.parse(localStorage.getItem('state')) || null;
    if (storageLocal && storageLocal.users.length !== 0) {
      return storageLocal;
    }
    return initialState;
  }
  const [state, dispatch] = useReducer(contactsReducer, getState());
 
  const addUser = user => {
    const userId = state.users[state.users.length - 1].id + 1;
    const newUser = {...user, id: userId};    
    localStorage.setItem('state', JSON.stringify({users: [...state.users, newUser]}));
    dispatch({
      type: ADD_USER,
      payload: newUser
    })
  }
  const deleteUser = id => {
    const newUsers = state.users.filter(user => user.id !== id);
    localStorage.setItem('state', JSON.stringify({users: newUsers}));
    dispatch({
      type: DELETE_USER,
      payload: id
    })
  }
  const updateUser = user => {
    dispatch({
      type: UPDATE_USER,
      payload: user
    })
  }
  const {users} = state;
  return (
    <ContactsContext.Provider value={{
      addUser, deleteUser, updateUser, users
    }}>
      {children}
    </ContactsContext.Provider>
  )
}