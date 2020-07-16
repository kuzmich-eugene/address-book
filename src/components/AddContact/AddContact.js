import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

import './AddContact.scss';
import {ContactsContext} from '../../context/contactsContext';

export const AddContact = () => {
  // export class AddContact extends React.Component {
    const st = useContext(ContactsContext);
    const inputRef = React.createRef()

  // state = {
  //   nameControl: '',
  //   surnameControl: '',
  //   emailControl: ''
  // }

  // handleChange = (e) => {
    
  // }
  // constructor(props) {
  //   super(props);
  //   this.addingUser = this.addingUser.bind(this);
  //   this.inputRef = React.createRef()
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.inputRef)
  // }

  const addingUser = (e) => {
    e.preventDefault();
    // const st = useContext(ContactsContext);
    console.log(inputRef, 555555)
    // const user = {name: 'Pol', surname: 'Mak', email: 'zxc@gmail.com'};
    // st.addUser(user)
  }

  // render() {
    return (
      <div className="AddContact">
        <form className="formSearch" noValidate autoComplete="off">
          <TextField
            ref={inputRef.current.value}
            className="control"
            label="First Name"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              )
            }} />
          <TextField
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
  // }
  
    
}