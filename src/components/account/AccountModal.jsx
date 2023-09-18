import styled from 'styled-components';
import GDSCText, { TextType } from '../core/GDSCText';
import GDSCButton from '../core/GDSCButton';
import Colors from '../../style/Colors';

const Container = styled.div`
  display: flex;
  width: 1088px;
  height: 638px;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.WHITE100};
  border-radius: 20px;
`;

const Header = styled.div`
  height: 81px;
  width: 1088px;
  display: flex;
  padding: 0px 40px;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  background-color: ${Colors.BLUE_DEEP};
`;

const Contents = styled.div`
  width: 1088px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0px 40px;
  justify-content: space-between;
`;

const ButtonColumn = styled.div`
  display: flex;
  width: 100px;
  padding: 40px 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ContentsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 40px;
  flex: 1 0 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemField = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 274px;
  height: 44px;
`;

const ImgField = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 274px;
  height: 163px;
`;

const AccountModal = ({ setIsOpen }) => {
  return (
    <Container>
      <Header>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          통장거래내역 추가
        </GDSCText>
        <GDSCButton
          label={'X'}
          onClick={() => {
            setIsOpen(false);
          }}
          inactive={false}
        />
      </Header>
      <Contents>
        <ContentsColumn>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              사업일
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              담당자
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              집행내용
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              코드
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              거래형태
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              수입
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              지출
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              잔액
            </GDSCText>
            <ItemField />
          </Item>
        </ContentsColumn>
        <ContentsColumn>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              통장거래일
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              이채계좌번호
            </GDSCText>
            <ItemField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              영수증
            </GDSCText>
            <ImgField />
          </Item>
          <Item>
            <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
              비고
            </GDSCText>
            <ImgField />
          </Item>
        </ContentsColumn>
        <ButtonColumn>
          <GDSCButton
            label={'등록'}
            onClick={() => {
              setIsOpen(false);
            }}
            inactive={false}
          />
        </ButtonColumn>
      </Contents>
    </Container>
  );
};

export default AccountModal;
