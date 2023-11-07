import { Snackbar } from '@mui/material';

// todo: style apply

const GDSCToast = ({ toastOpen, setToastOpen, toastAction, duration, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      open={toastOpen}
      onClose={() => {
        setToastOpen(false);
      }}
      action={toastAction}
      autoHideDuration={duration}
      message={message}
    />
  );
};

export default GDSCToast;
