import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ChartHeader from '../components/main/ChartHeader';
import OrgManageChart from '../components/main/org_manage/OrgManageChart';
import GDSCModal from '../components/core/GDSCModal';
import GDSCPagination from '../components/core/GDSCPagination';
import GDSCToast from '../components/core/GDSCToast';
import OrgManageModal from '../components/main/org_manage/OrgManageModal';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const toydata = [
  {
    organisation: '감사원',
    email: 'gamsawon@kaist.ac.kr',
    id: 'gamsawon',
    password: 'password1234',
  },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const PaginationContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: right;
  background-color: ${Colors.GREY20};
`;

// todo: replace toydata to api get

const OrgManagePage = () => {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [addRow, setAddRow] = useState([]);

  const COUNT_PER_PAGE = 12;
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
      <ChartHeader headerText={'피감기구 계정 관리'} label={'새로 추가하기'} setIsOpen={setIsOpen} />
      <OrgManageChart account={renderData([...toydata, ...addRow])} addRow={addRow} page={page} />
      <PaginationContainer>
        <GDSCPagination
          count={Math.ceil([...toydata, ...addRow].length / COUNT_PER_PAGE)}
          page={page}
          setPage={setPage}
        />
      </PaginationContainer>

      <GDSCModal open={isOpen} onClose={() => setIsOpen(false)}>
        <OrgManageModal setIsOpen={setIsOpen} setAddRow={setAddRow} setToastOpen={setToastOpen} />
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

export default OrgManagePage;
