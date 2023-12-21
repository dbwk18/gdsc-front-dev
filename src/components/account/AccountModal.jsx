import styled from 'styled-components';
import GDSCText, { TextType } from '../core/GDSCText';
import Colors from '../../style/Colors';
import { useState } from 'react';
import GDSCModal from '../core/GDSCModal';
import GDSCButton from '../core/GDSCButton';

const Container = styled.div`
  width: 1088px;
  height: 638px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const Header = styled.div`
  width: 1088px;
  height: 81px;
  display: flex;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  padding: 40px;
`;

const Contents = styled.div`
  width: 1088px;
  height: 557px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ItemComponent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Item = styled.div`
  box-sizing: border-box;
  width: 257.32px;
  height: 36.01px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ItemName = styled.div`
  width: 100px;
  height: 36.01px;
  display: flex;
  align-items: center;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  flex-direction: column;
  color: #000000;
`;

const AccountModal = () => {
  return (
    <Container style={{ backgroundColor: Colors.WHITE100 }}>
      <Header style={{ backgroundColor: Colors.BLUE_DEEP }}>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          통장거래내역 추가
        </GDSCText>
      </Header>
      <Contents>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              사업일
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              yyyymmdd
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} color={Colors.BLACK100} fontType={TextType.BOLD}>
              담당자
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              담당자
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              집행내용
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              집행내용
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              코드
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              코드
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              거래형태
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              거래형태
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              수입
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              수입
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              지출
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              지출
            </GDSCText>
          </Item>
        </ItemComponent>
        <ItemComponent>
          <ItemName>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              잔액
            </GDSCText>
          </ItemName>
          <Item>
            <GDSCText size={14} color={Colors.GREY40} fontType={TextType.BOLD}>
              잔액
            </GDSCText>
          </Item>
        </ItemComponent>
      </Contents>
    </Container>
  );
};

export default AccountModal;
