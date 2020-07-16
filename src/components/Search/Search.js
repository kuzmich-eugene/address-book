import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import './Search.scss';
export const Search = () => {
  return (
    <div className="Search">
      <form className="formSearch" noValidate autoComplete="off">
        <TextField
          className="searchControl"
          label="Search contact"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }} />
      </form>
    </div>
  )
}