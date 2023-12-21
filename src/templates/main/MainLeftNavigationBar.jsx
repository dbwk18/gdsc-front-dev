import React from 'react';
import styled from 'styled-components';
import Colors from '../../style/Colors';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../components/main/Menu';
import KaistBaiLogo from '../../style/img/KAIST_BAI.svg';
import ArrowBlack from '../../style/img/arrow-back-double.svg';
import ClipboardBlack from '../../style/img/clipboard.svg';
import DollarBlack from '../../style/img/dollar-1.svg';
import HomeBlack from '../../style/img/home-1.svg';
import Icecream from '../../style/img/icecream.svg';
import SettingsBlack from '../../style/img/settings.svg';
import UserSquareBlack from '../../style/img/user-square.svg';
// 파란색 아이콘
import ArrowBlue from '../../style/img/arrow-back-double-blue.svg';
import ClipboardBlue from '../../style/img/clipboard-blue.svg';
import DollarBlue from '../../style/img/dollar-blue.svg';
import HomeBlue from '../../style/img/home-blue.svg';
import SettingsBlue from '../../style/img/settings-blue.svg';
import UserSquareBlue from '../../style/img/user-square-blue.svg';
import { useRecoilValue } from 'recoil';
import { authTypeAtom, userAtom } from '../../store/atoms/authAtoms';
import { AuthType } from '../../store/Authentication';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: ${Colors.WHITE100};
`;

const Frame488 = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const KaistBai = styled.div`
  display: flex;
  height: 64px;
  padding: 0px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
const Frame492 = styled.div`
  display: flex;
  width: 200px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Chip {
    display: flex;
    height: 40px;
    padding: 10px 20px 10px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 21px;
    background: #e9eaed;
  }
  .ChipName {
    color: #223047;
    font-family: Pretendard Variable;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }
`;

const Divider = styled.div`
  height: 1px;
  align-self: stretch;
  background-color: rgba(216, 220, 224, 1);
`;

const MainLeftNavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = useRecoilValue(userAtom);
  const authType = useRecoilValue(authTypeAtom);

  return (
    <Container>
      <Frame488>
        <KaistBai>
          <img src={KaistBaiLogo} width="116" height="20" alt="logo" />
        </KaistBai>
        <Frame492>
          <div className="Chip">
            <img src={Icecream} width="20" height="20" alt="icecream" />
            <p className="ChipName">{`${userName}`}</p>
          </div>
        </Frame492>
        <Menu
          iconBlack={HomeBlack}
          iconBlue={HomeBlue}
          menuName="홈"
          selected={location.pathname === '/main/dashboard'}
          onClick={() => navigate('/main/dashboard')}
        />
        {authType === AuthType.ADMIN && (
          <Menu
            iconBlack={UserSquareBlack}
            iconBlue={UserSquareBlue}
            menuName="피감기구 계정관리"
            selected={location.pathname === '/main/groups'}
            onClick={() => navigate('/main/groups')}
          />
        )}
        <Divider />
        <Menu
          iconBlack={DollarBlack}
          iconBlue={DollarBlue}
          menuName="예결산안"
          selected={location.pathname === '/main/budget'}
          onClick={() => navigate('/main/budget')}
        />
        <Menu
          iconBlack={ClipboardBlack}
          iconBlue={ClipboardBlue}
          menuName="통장거래내역"
          selected={location.pathname === '/main/account'}
          onClick={() => navigate('/main/account')}
        />
        <Divider />
        <Menu iconBlack={SettingsBlack} iconBlue={SettingsBlue} menuName="설정" />
      </Frame488>
      <Menu iconBlack={ArrowBlack} iconBlue={ArrowBlue} menuName="접기" />
    </Container>
  );
};

export default MainLeftNavigationBar;
