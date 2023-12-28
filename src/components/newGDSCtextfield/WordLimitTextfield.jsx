import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  height: 20px;
`;

const Label = styled.div`
  color: #223047;
  font-size: 13px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  line-height: 22px;
  word-wrap: break-word;
`;

const IconContainer = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
`;

const OuterIcon = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  left: 0;
  top: 0;
  background: #223047;
`;

const InnerIcon = styled.div`
  width: 12px;
  height: 12px;
  padding: 1.5px;
  position: absolute;
  left: 1px;
  top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BorderIcon = styled.div`
  width: 9px;
  height: 9px;
  border: 1.2px solid white;
`;

const InputContainer = styled.div`
  align-self: stretch;
  height: 40px;
  padding: 12px;
  background: rgba(233, 234, 237, 0.4);
  border-radius: 8px;
  border: 1px solid #d8dce0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const Placeholder = styled.div`
  flex: 1;
  color: #87909b;
  font-size: 14px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  line-height: 16px;
  word-wrap: break-word;
`;

const CounterContainer = styled.div`
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
`;

const Counter = styled.div`
  text-align: right;
  color: #a7acb6;
  font-size: 13px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  line-height: 22px;
  word-wrap: break-word;
`;

const HelpText = styled.div`
  color: #a7acb6;
  font-size: 12px;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const WordLimitTextField = () => {
  return (
    <Container>
      <LabelContainer>
        <Label>라벨</Label>
        <IconContainer>
          <OuterIcon />
          <InnerIcon>
            <BorderIcon />
          </InnerIcon>
        </IconContainer>
      </LabelContainer>
      <InputContainer>
        <Placeholder>입력해주세요</Placeholder>
        <CounterContainer>
          <Counter>0/100</Counter>
        </CounterContainer>
      </InputContainer>
      <HelpText>도움말 텍스트</HelpText>
    </Container>
  );
};

export default WordLimitTextField;
