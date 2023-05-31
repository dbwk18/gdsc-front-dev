import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const MySelect = styled(Select)`
  width: 250px;
  height: 40px;
`;

const SelectDrop = () => {
  const [incomeExpend, setIncomeExpend] = React.useState('');

  const handleChange = event => {
    setIncomeExpend(event.target.value);
  };

  return (
    <MySelect labelId="demo-select-small-label" id="demo-select-small" value={incomeExpend} onChange={handleChange}>
      <MenuItem value={'수입'}>수입</MenuItem>
      <MenuItem value={'지출'}>지출</MenuItem>
    </MySelect>
  );
};

export default SelectDrop;
