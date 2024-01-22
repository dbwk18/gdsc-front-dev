import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';

const BudgetPeriodContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BudgetPeriodDetail = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const BudgetPeriodText = ({ targetYear, targetHalf, formattedPeriod }) => {
  const targetHalfText = targetHalf === 'spring' ? '상반기' : '하반기';

  return (
    <BudgetPeriodContainer>
      <GDSCText size={32} fontType={TextType.BOLD}>
        {`${targetYear}년 ${targetHalfText}`}
      </GDSCText>
      <BudgetPeriodDetail>
        <GDSCText size={14} fontType={TextType.BOLD}>
          {'현재 감사 자료 작성기간입니다'}
        </GDSCText>
        <GDSCText size={14} fontType={TextType.MEDIUM}>
          {formattedPeriod}
        </GDSCText>
      </BudgetPeriodDetail>
    </BudgetPeriodContainer>
  );
};

export default BudgetPeriodText;
