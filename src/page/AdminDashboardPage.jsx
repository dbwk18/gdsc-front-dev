import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import { getForEntity } from '../network/HttpRequests';
import AdminMyInfo from '../templates/main/dashboard/admin/AdminMyInfo';
import AdminEditPeriod from '../templates/main/dashboard/admin/AdminEditPeriod';
import AdminOrgList from '../templates/main/dashboard/admin/AdminOrgList';
import GDSCText, { TextType } from '../components/core/GDSCText';
import { convertPeriodToLongFormat } from '../utils/DateUtils';
import BudgetPeriodText from '../components/main/dashboard/BudgetPeriodText';

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
        const formatted = convertPeriodToLongFormat(selected.start, selected.end);
        console.log(formatted);
        setFormattedPeriod(formatted);
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
          <BudgetPeriodText targetYear={targetYear} targetHalf={targetHalf} formattedPeriod={formattedPeriod} />
        )}
      </TitleContainer>
      <AdminMyInfo
        totalOrgsCount={orgs.length}
        activeOrgsCount={activeOrgs.length}
        submittedOrgsCount={submittedOrgsCount}
      />
      <SecondRowContainer>
        <AdminEditPeriod targetYear={targetYear} targetHalf={targetHalf} />
        <AdminOrgList orgs={orgs} />
      </SecondRowContainer>
    </Container>
  );
};

export default AdminDashboardPage;
