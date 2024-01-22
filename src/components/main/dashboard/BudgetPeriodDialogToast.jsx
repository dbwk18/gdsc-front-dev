import { Alert, Snackbar } from '@mui/material';
import BudgetPeriodStartModal from './BudgetPeriodStartModal';
import GDSCDialog from '../../core/GDSCDialog';
import { useState } from 'react';

const BudgetPeriodDialogToast = ({ isModalOpen, setIsModalOpen, targetYear, targetHalf, isIndividual = false }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  return (
    <div>
      <GDSCDialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BudgetPeriodStartModal
          setIsModalOpen={setIsModalOpen}
          setIsToastOpen={setIsToastOpen}
          setToastMessage={setToastMessage}
          year={targetYear}
          half={targetHalf}
          isIndividual={isIndividual}
        />
      </GDSCDialog>
      <Snackbar
        open={isToastOpen}
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
    </div>
  );
};

export default BudgetPeriodDialogToast;
