import PageContainer from '../components/pageContainer';
import FormContainer from '../components/formContainer';
import ForgotPasswordForm from '../components/forms/forgotPasswordForm';

export default function Forgot() {

  return (
    <PageContainer>
        <FormContainer title="Forgot Password">
          <ForgotPasswordForm />
        </FormContainer>
    </PageContainer>
  )
}
