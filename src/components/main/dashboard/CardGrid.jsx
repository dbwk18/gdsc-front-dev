import React from 'react';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import styled from 'styled-components';
import { CardMedia } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';

export const orgs = [
  {
    id: 1,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 2,
    name: '피감기관명',
    status: '미제출',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 3,
    name: '피감기관명',
    status: '미제출',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 4,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 5,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 6,
    name: '피감기관명',
    status: '미제출',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 7,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 8,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 9,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 10,
    name: '피감기관명',
    status: '미제출',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 11,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 12,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 13,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 14,
    name: '피감기관명',
    status: '제출완료',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
  {
    id: 15,
    name: '피감기관명',
    status: '미제출',
    cards: [
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
      'https://i.ibb.co/XjRnWN8/credit-card-1369111-1280.png',
    ],
  },
];

const SubmitIcon = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 130px;
  height: 30px;
  border-radius: 16px;
  color: ${props => props.color};
  text-align: center;
  display: inline-block;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 15px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

const CardGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, width: '100%', height: '450px', overflow: 'scroll' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '30px', position: 'sticky' }}>
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
      {orgs.map(org => (
        <OrgRow key={org.id} org={org} />
      ))}
    </Box>
  );
};

const OrgRow = ({ org }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '150px' }}>{org.name}</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 15, width: '100%', marginRight: 5 }}>
        {org.cards.map(item => (
          <CardMedia component="img" image={item} alt={item} sx={{ width: 80, height: 80, marginBottom: 3 }} />
        ))}
      </div>
      <StatusChip status={org.status} />
    </div>
  );
};

const StatusChip = ({ status }) => {
  const submitted = status === '제출완료';
  const color = submitted ? '#28C82E' : '#DC3545';
  const backgroundColor = submitted ? '#DFF7E0' : '#F8D7DA';
  return (
    <SubmitIcon backgroundColor={backgroundColor} color={color}>
      <CircleIcon
        sx={{
          verticalAlign: 'middle',
          color,
          fontSize: '6px',
          marginRight: '4px',
          marginBottom: '2px',
        }}
      />
      {status}
    </SubmitIcon>
  );
};

export default CardGrid;
