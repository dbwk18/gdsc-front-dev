import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import InfoRowItem from '../../../../components/main/dashboard/InfoRowItem';
import GDSCButton from '../../../../components/core/GDSCButton';
import { getForEntity } from '../../../../network/HttpRequests';
import { convertPeriodToShortFormat } from '../../../../utils/DateUtils';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 32px;
`;

const RecentEditPeriod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeriodStartButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const AdminEditPeriod = ({ setModalOpen }) => {
  const [recentEditPeriods, setRecentEditPeriods] = useState([]);

  const getTitle = (year, half) => {
    if (!year || !half) {
      return '';
    }

    const yearText = year.toString().slice(-2);
    const halfText = half === 'spring' ? '상반기' : '하반기';

    return `${yearText}년도 ${halfText} 자료 입력 기간`;
  };

  useEffect(() => {
    getForEntity('/budgets/period/').then(periods => {
      periods.sort(function (a, b) {
        return b.start - a.start;
      });
      setRecentEditPeriods(periods.slice(0, 3));
    });
  }, []);
  return (
    <Container>
      <GDSCText size={24} fontType={TextType.BOLD}>
        {'회계 감사 자료 수정 기간'}
      </GDSCText>
      <RecentEditPeriod>
        <GDSCText size={20} fontType={TextType.BOLD}>
          {'최근 수정 기간'}
        </GDSCText>
        <PeriodContainer>
          {recentEditPeriods.map(period => (
            <InfoRowItem
              key={period.start}
              title={getTitle(period.year, period.half)}
              content={convertPeriodToShortFormat(period.start, period.end)}
            />
          ))}
        </PeriodContainer>
      </RecentEditPeriod>

      <PeriodStartButton>
        <GDSCButton
          label={'감사 시작하기'}
          onClick={() => {
            setModalOpen(true);
          }}
          inactive={false}
        />
      </PeriodStartButton>
    </Container>
  );
};

export default AdminEditPeriod;
