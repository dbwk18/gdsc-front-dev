import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Colors from '../../style/Colors';
import LNBItem from '../../components/main/LNBItem';

const Container = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 26px;
  gap: 8px;
  background-color: ${Colors.BLUE_BACKGROUND};
  border-right: 1px solid ${Colors.BLACK08};
`;

const MainLeftNavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <LNBItem
        label="피감기구 대시보드"
        selected={location.pathname.includes('organization-dashboard')}
        onClick={() => navigate('/main/organization-dashboard')}
      />
      <LNBItem
        label="감사원 대시보드"
        selected={location.pathname.includes('admin-dashboard')}
        onClick={() => navigate('/main/admin-dashboard')}
      />
      <LNBItem
        label="예결산안"
        selected={location.pathname.includes('budget')}
        onClick={() => navigate('/main/budget')}
      />
      <LNBItem
        label="통장거래내역"
        selected={location.pathname.includes('account')}
        onClick={() => navigate('/main/account')}
      />
    </Container>
  );
};

export default MainLeftNavigationBar;
