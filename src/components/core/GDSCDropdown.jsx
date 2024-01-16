import React from 'react';
import styled from 'styled-components';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const GDSCDropdown = ({ value, setValue, items }) => {
  const StyledBox = styled(Box)`
    border-radius: 10px;
    width: 100%;
    height: 80px;
    min-width: 120;
  `;

  return (
    <StyledBox>
      <FormControl fullWidth>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
          재원
        </InputLabel> */}
        <Select
          // labelId="demo-simple-select-label"
          id="uncontrolled-native"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        >
          {items.map(item => (
            <MenuItem value={`${item}`}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledBox>
  );
};

export default GDSCDropdown;
