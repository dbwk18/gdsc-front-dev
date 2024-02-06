import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import { useState, useEffect } from 'react';
import { getForEntity } from '../../../../network/HttpRequests';
import { convertPeriodToShortFormat } from '../../../../utils/DateUtils';

const Container = styled.div`
  width: 520px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 32px;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .periods {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const OrgEditPeriod = () => {
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    getForEntity('budgets/period').then(data => {
      setPeriods(data);
    });
  }, []);

  function formatDate(dateString) {
    return dateString.split('T')[0].split('-').join('.');
  }

  return (
    <Container>
      <GDSCText size={24} fontType={TextType.BOLD}>
        회계 감사 자료 수정 기간
      </GDSCText>
      <Contents>
        <GDSCText size={16} fontType={TextType.MEDIUM}>
          최근 수정 기간
        </GDSCText>
        <div className="periods">
          {periods.map(period => {
            return (
              <div className="item">
                <GDSCText size={13}>{`${period.year}년도 ${
                  period.half === 'spring' ? '상반기' : '하반기'
                } 자료 입력 기간`}</GDSCText>
                <GDSCText size={13}>{`${convertPeriodToShortFormat(period.start, period.end)}`}</GDSCText>
              </div>
            );
          })}
          {periods.length === 0 && (
            <GDSCText size={12} color={Colors.BLACK60}>
              최근 자료 입력 기간 정보가 없습니다
            </GDSCText>
          )}
        </div>
      </Contents>
    </Container>
  );
};

export default OrgEditPeriod;
