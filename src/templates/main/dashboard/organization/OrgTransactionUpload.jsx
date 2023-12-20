import InfoCard from '../../../../components/main/dashboard/InfoCard';
import FileUploadContainer from '../../../../components/main/dashboard/FileUploadContainer';

const TransactionUpload = () => {
  return (
    <InfoCard title={'거래명세조회서'} minWidth="400px">
      <FileUploadContainer inputId="거래명세조회서" onFilesSelect={() => {}} fileType="application/pdf" />
    </InfoCard>
  );
};

export default TransactionUpload;
