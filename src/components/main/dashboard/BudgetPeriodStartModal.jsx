import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { postForEntity } from '../../../network/HttpRequests';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Container = styled.div`
  display: flex;
  width: 480px;
  height: fit-content;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.WHITE100};
  overflow-y: scroll;
  padding: 30px;
  margin: 16px;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ClsoeButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const DateTimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DateTimePicker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

dayjs.extend(utc);

const BudgetPeriodStartModal = ({
  setIsModalOpen,
  setIsToastOpen,
  setToastMessage,
  year,
  half,
  isIndividual = false,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [titleText, setTitleText] = useState('');
  const [periodPostUrl, setPeriodPostUrl] = useState('');

  useEffect(() => {
    if (isIndividual) {
      setPeriodPostUrl(`budgets/period/orgID/${year}/${half}/`);
      setToastMessage(`수정 권한이 설정되었습니다`);
      setTitleText('개별 감사 시작하기');
    } else {
      setPeriodPostUrl(`budgets/period/orgID/${year}/${half}/`);
      setToastMessage(`감사기간이 설정되었습니다`);
      setTitleText('감사 시작하기');
    }
  }, []);

  const dateTimeToUTC = (date, time) => {
    const combinedDatetime = date.hour(time.hour()).minute(time.minute());
    return combinedDatetime.utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  };

  const createBudgetPeriod = () => {
    if (!startDate || !startTime || !endDate || !endTime) {
      alert('기간을 입력해주세요.');
      return;
    }
    const startDatetime = dateTimeToUTC(startDate, startTime);
    const endDatetime = dateTimeToUTC(endDate, endTime);

    postForEntity(periodPostUrl, {
      start: startDatetime,
      end: endDatetime,
    })
      .then(res => {
        setIsModalOpen(false);
        setToastMessage('감사기간이 설정되었습니다');
        setIsToastOpen(true);
      })
      .catch(err => {
        alert(`${err.message}\n감사기간 등록을 실패했습니다. 관리자에게 문의해주세요.`);
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <TextContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <GDSCText size={25} fontType={TextType.BOLD} color={Colors.BLACK100}>
              {titleText}
            </GDSCText>
            <ClsoeButton
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              {' '}
              x{' '}
            </ClsoeButton>
          </div>
          <div>
            <GDSCText size={14} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
              {'감사기간을 시작합니다.'}
            </GDSCText>
            <GDSCText size={14} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
              {'감사 시작일과 종료일을 입력해주세요.'}
            </GDSCText>
          </div>
        </TextContainer>
        <DateTimePickerContainer>
          <GDSCText>시작</GDSCText>
          <DateTimePicker>
            <DatePicker label="Controlled picker" value={startDate} onChange={newValue => setStartDate(newValue)} />
            <TimePicker label="Controlled picker" value={startTime} onChange={newValue => setStartTime(newValue)} />
          </DateTimePicker>

          <GDSCText>종료</GDSCText>
          <DateTimePicker>
            <DatePicker label="Controlled picker" value={endDate} onChange={newValue => setEndDate(newValue)} />
            <TimePicker label="Controlled picker" value={endTime} onChange={newValue => setEndTime(newValue)} />
          </DateTimePicker>
        </DateTimePickerContainer>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <GDSCButton
            label={'시작하기'}
            onClick={() => {
              createBudgetPeriod();
            }}
            inactive={false}
          />
        </div>
      </Container>
    </LocalizationProvider>
  );
};

export default BudgetPeriodStartModal;
