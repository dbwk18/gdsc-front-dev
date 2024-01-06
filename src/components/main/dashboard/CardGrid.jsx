import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import { getForEntity } from '../../../network/HttpRequests';
import OrgCardRow from './OrgCardRow';

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

const CardGrid = () => {
  const [orgs, setOrgs] = React.useState([]);

  useEffect(() => {
    getForEntity(`/users`).then(response => {
      setOrgs(response.filter(org => org.role === 'user'));
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '30px' }}>
        <GDSCText size={17} fontType={TextType.MEDIUM}>
          피감기관명
        </GDSCText>
        <GDSCText size={17} fontType={TextType.MEDIUM}>
          카드
        </GDSCText>
        <GDSCText size={17} fontType={TextType.MEDIUM}>
          제출 여부
        </GDSCText>
      </div>
      <Divider />
      {orgs && (
        <div>
          {orgs.map(org => (
            <OrgCardRow key={org.id} orgName={org.organization_name} cards={[]} />
          ))}
        </div>
      )}
    </Box>
  );
};

export default CardGrid;
