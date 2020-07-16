import React from 'react';
import './App.scss';
import { Search } from './components/Search/Search';
import { AddContact } from './components/AddContact/AddContact';
import { ContactList } from './components/ContactList/ContactList';
import { ContactsState } from './context/ContactsState';

function App() {
  return (
    <ContactsState>
      <div className="App">
        <header>Address Book</header>
        <main>
          <div className="sidebar">
            <Search />
            <AddContact />
          </div>
          <div className="main-content">
            <ContactList />
          </div>
        </main>
      </div>
    </ContactsState>    
  );
}

export default App;
