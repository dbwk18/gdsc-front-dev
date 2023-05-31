import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectDrop = () => {
  const [incomeExpend, setIncomeExpend] = React.useState('');

  const handleChange = event => {
    setIncomeExpend(event.target.value);
  };

  return (
    <FormControl>
      <Select onChange={handleChange}>
        <MenuItem value={'수입'}>수입</MenuItem>
        <MenuItem value={'지출'}>지출</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectDrop;
