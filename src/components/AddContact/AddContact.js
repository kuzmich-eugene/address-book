import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

import './AddContact.scss';
import {ContactsContext} from '../../context/contactsContext';

export const AddContact = () => {
  const {addUser, userForUpdate} = useContext(ContactsContext);
  const firstNameInput = React.createRef();
  const surnameInput = React.createRef();
  const emailInput = React.createRef();

  if (userForUpdate) {
    console.log(userForUpdate.name);
    // firstNameInput.current.value = userForUpdate.name;
    // surnameInput.current.value = userForUpdate.surname;
    // emailInput.current.value = userForUpdate.email;
  }

  const addingUser = (e) => {
    addUser({
      name: firstNameInput.current.value,
      surname: surnameInput.current.value,
      email: emailInput.current.value
    })
    firstNameInput.current.value = '';
    surnameInput.current.value = '';
    emailInput.current.value = '';
  }
  const name = () => {
    if (userForUpdate) {
      return userForUpdate.name
    }
    return ''
  }

  return (
    <div className="AddContact">
      <form className="formSearch" noValidate autoComplete="off">
        <TextField
          inputRef={firstNameInput}
          className="control"
          label="First Name"
          value={name()}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon />
              </InputAdornment>
            )
          }} />
        <TextField
          inputRef={surnameInput}
          className="control"
          label="Last Name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon />
              </InputAdornment>
            )
          }} />
        <TextField
          inputRef={emailInput}
          className="control"
          label="Email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon />
              </InputAdornment>
            )
          }} />
        <Button
          className="Button"
          variant="contained"
          color="primary"
          onClick={addingUser}>
          Add new contact
        </Button>
      </form>
    </div>
  )    
}