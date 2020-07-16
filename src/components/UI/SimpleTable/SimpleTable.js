import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const {tableTitle, users, onClick} = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            { tableTitle.map((name, index) => {
              return (
                <TableCell 
                  key={index}
                  align="center">
                  { name }
                </TableCell>
              )
            }) }
          </TableRow>
        </TableHead>
        <TableBody>
          { users.map(user => (
            <TableRow key={user.id}>
              <TableCell align="center">{ user.name }</TableCell>
              <TableCell align="center">{ user.surname }</TableCell>
              <TableCell align="center">{ user.email }</TableCell>
              <TableCell align="center" onClick={() => console.log('hello')}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => onClick(user.id)}>
                  <CloseIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}