import React, {useContext} from 'react';

import './ContactList.scss';
import SimpleTable from '../UI/SimpleTable/SimpleTable';
import { ContactsContext } from '../../context/contactsContext';

export const ContactList = () => {
  const {users, deleteUser, setUserForUpdate} = useContext(ContactsContext);
  const tableTitle = ['First Name', 'Last Name', 'Email', 'Edit', 'Delete'];
  return (
    <div className="ContactList">
      <p>Contact List</p>
      <hr/>      
      <SimpleTable
        tableTitle={tableTitle}
        users={users}
        onClick={deleteUser}
        onEdit={setUserForUpdate} />
    </div>
  )
}