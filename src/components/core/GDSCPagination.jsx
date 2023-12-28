import { Pagination } from '@mui/material';

const GDSCPagination = ({ count, page, setPage }) => {
  const onPageChange = (e, num) => {
    setPage(num);
  };

  return (
    <Pagination
      count={count}
      page={page}
      onChange={onPageChange}
      // styled
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
      }}
    />
  );
};

export default GDSCPagination;
