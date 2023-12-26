import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ChartHeader from '../components/main/ChartHeader';
import AccountChart from '../components/main/account/AccountChart';
import GDSCModal from '../components/core/GDSCModal';
import GDSCPagination from '../components/core/GDSCPagination';
import GDSCToast from '../components/core/GDSCToast';
import AccountModal from '../components/main/account/AccountModal';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import toydata from '../data/AccountToyData.json';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

// todo: replace toydata to api get
const PaginationContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: right;
  background-color: ${Colors.GREY20};
`;

// todo: replace toydata to api get

const AccountPage = () => {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [addRow, setAddRow] = useState([]);

  const COUNT_PER_PAGE = 8;
  const offset = (page - 1) * COUNT_PER_PAGE;

  const renderData = data => {
    let result = [];
    if (data) {
      result = data.slice(offset, offset + COUNT_PER_PAGE);
    }
    return result;
  };

  const handleToastAction = () => {
    // todo: [...toydata, ...addRow] -> fetched data
    const rowidx = [...toydata, ...addRow].findIndex(e => e === addRow[0]);
    setPage(Math.floor(rowidx / COUNT_PER_PAGE) + 1);
    setToastOpen(false);
  };

  const toastAction = (
    <>
      <Button color="primary" size="small" onClick={handleToastAction}>
        VIEW
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setToastOpen(false);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container>
      <ChartHeader headerText={'통장거래내역'} label={'PDF로 다운받기'} setIsOpen={setIsOpen} />
      <AccountChart account={renderData([...toydata, ...addRow])} addRow={addRow} page={page} />
      <PaginationContainer>
        <GDSCPagination
          count={Math.ceil([...toydata, ...addRow].length / COUNT_PER_PAGE)}
          page={page}
          setPage={setPage}
        />
      </PaginationContainer>

      <GDSCModal open={isOpen} onClose={() => setIsOpen(false)}>
        <AccountModal setIsOpen={setIsOpen} setAddRow={setAddRow} setToastOpen={setToastOpen} />
      </GDSCModal>
      <GDSCToast
        toastOpen={toastOpen}
        setToastOpen={setToastOpen}
        toastAction={toastAction}
        duration={5000}
        message={'Successfully Added'}
      />
    </Container>
  );
};

export default AccountPage;
