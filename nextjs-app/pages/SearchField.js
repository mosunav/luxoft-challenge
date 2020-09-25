import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { green, purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
    '& label.Mui-focused': {
      color: 'green',
    },
  },
  textField: {
    width: '38ch',
    margin: '0.5rem 0rem 1rem 3rem',
    height: '1rem',
  },
  label: {
    textTransform: 'capitalize',
  },
}));
const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    marginBottom: '0.1rem',
    height: '2.5rem',
    width: '3rem',
    fontSize: '1rem',
  },
}))(Button);

const SearchField = () => {
  const [search, setSearch] = useState('');
  const getValue = e => {
    let value = e.target.value;
    console.lg(search);
    setSearch(value);
    return value;
  };

  const classes = useStyles();
  return (
    <div className="mx-auto mt-8">
      <form className={classes.root}>
        <TextField
          size="small"
          className={classes.textField}
          label="Filter"
          variant="outlined"
          onChange={e => getValue(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <ColorButton className={classes.label}>Filter</ColorButton>
      </form>
    </div>
  );
};

export default SearchField;
