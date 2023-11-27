import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import MainLeftNavigationBar from '../../templates/main/MainLeftNavigationBar';
import MainHeader from '../../templates/main/MainHeader';
import Colors from '../../style/Colors';
import { useRecoilValue } from 'recoil';
import { authTypeAtom } from '../../store/atoms/authAtoms';
import { AuthType } from '../../store/Authentication';
import { getForEntity } from '../../network/HttpRequests';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

const OutletArea = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.BLUE_BACKGROUND};
`;

const MainLayout = () => {
  const authType = useRecoilValue(authTypeAtom);
  const navigate = useNavigate();

  useEffect(() => {
    // Auth 정상적으로 됐는지 시험용
    getForEntity('/organizations').then(data => console.log(data));
  }, []);

  useEffect(() => {
    if (authType === AuthType.ADMIN) navigate('/main/groups');
    else navigate('/main/budget');
  }, [authType]);

  return (
    <Container>
      <MainHeader />
      <Body>
        <MainLeftNavigationBar />
        <OutletArea>
          <Outlet />
        </OutletArea>
      </Body>
    </Container>
  );
};

export default MainLayout;
