import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import { getForEntity } from '../network/HttpRequests';
import AdminMyInfo from '../templates/main/dashboard/admin/AdminMyInfo';
import AdminEditPeriod from '../templates/main/dashboard/admin/AdminEditPeriod';
import AdminOrgList from '../templates/main/dashboard/admin/AdminOrgList';
import GDSCText, { TextType } from '../components/core/GDSCText';
import { convertPeriodToLongFormat } from '../utils/DateUtils';
import { Alert, Snackbar } from '@mui/material';
import GDSCDialog from '../components/core/GDSCDialog';
import BudgetPeriodStartModal from '../components/main/dashboard/BudgetPeriodStartModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SecondRowContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const AdminDashboardPage = () => {
  const [orgs, setOrgs] = useState([]);
  const [activeOrgs, setActiveOrgs] = useState([]);
  const [submittedOrgsCount, setSubmittedOrgsCount] = useState(0);
  const [targetYear, setTargetYear] = useState(null);
  const [targetHalf, setTargetHalf] = useState(null);
  const [formattedPeriod, setFormattedPeriod] = useState(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('설정되었습니다');
  const [modalOpen, setModalOpen] = useState(false);

  const toastAction = () => {
    alert('toast');
  };

  useEffect(() => {
    getForEntity(`/users`).then(response => {
      setOrgs(response.filter(org => org.role === 'user'));
      setActiveOrgs(orgs.filter(org => !org.isDisabled));
      setSubmittedOrgsCount(activeOrgs.filter(org => org.status === '제출완료').length);
    });
  }, []);

  useEffect(() => {
    getForEntity('budgets/period').then(data => {
      function checkDateInRange(start, end) {
        const today = new Date();
        const startDate = new Date(start);
        const endDate = new Date(end);
        return today >= startDate && today <= endDate;
      }

      const ablePeriod = data.filter(d => checkDateInRange(d.start, d.end));
      if (ablePeriod.length !== 0) {
        const selected = ablePeriod[0];
        setTargetYear(selected.year);
        setTargetHalf(selected.half);
        setFormattedPeriod(convertPeriodToLongFormat(selected.start, selected.end));
      }
    });
  }, []);

  return (
    <Container>
      <TitleContainer>
        {(targetYear === null || targetHalf === null) && (
          <GDSCText size={32} fontType={TextType.BOLD} color={Colors.BLACK40}>
            해당 감사기간이 없습니다
          </GDSCText>
        )}
        {targetYear && targetHalf && (
          <BudgetPeriod targetYear={targetYear} targetHalf={targetHalf} formattedPeriod={formattedPeriod} />
        )}
      </TitleContainer>
      <AdminMyInfo
        totalOrgsCount={orgs.length}
        activeOrgsCount={activeOrgs.length}
        submittedOrgsCount={submittedOrgsCount}
      />
      <SecondRowContainer>
        <AdminEditPeriod setModalOpen={setModalOpen} />
        <AdminOrgList orgs={orgs} setModalOpen={setModalOpen} />
      </SecondRowContainer>
      <GDSCDialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <BudgetPeriodStartModal
          setModalOpen={setModalOpen}
          setToastOpen={setToastOpen}
          setToastMessage={setToastMessage}
          year={targetYear}
          half={targetHalf}
        />
      </GDSCDialog>
      <Snackbar
        open={toastOpen}
        autoHideDuration={5000}
        message={toastMessage}
        sx={{
          marginLeft: '250px',
          marginTop: '100px',
        }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

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

const BudgetPeriod = ({ targetYear, targetHalf, formattedPeriod }) => {
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

export default AdminDashboardPage;
