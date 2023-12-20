import InfoCard from '../../../../components/main/dashboard/InfoCard';
import FileUploadContainer from '../../../../components/main/dashboard/FileUploadContainer';

const OrgAccountInfoUpload = () => {
  return (
    <InfoCard title={'통장 정보'} minWidth="400px">
      <FileUploadContainer inputId="통장 정보" onFilesSelect={() => {}} fileType="image/*" />
    </InfoCard>
  );
};

export default OrgAccountInfoUpload;
