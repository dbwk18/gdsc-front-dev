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
    <Select labelId="demo-select-small-label" id="demo-select-small" value={incomeExpend} onChange={handleChange}>
      <MenuItem value={'수입'}>수입</MenuItem>
      <MenuItem value={'지출'}>지출</MenuItem>
    </Select>
  );
};

export default SelectDrop;
