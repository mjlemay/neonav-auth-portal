import PageContainer from '../components/pageContainer';
import FormContainer from '../components/formContainer';
import ForgotPasswordForm from '../components/forms/forgotPasswordForm';
import MenuContainer from '../components/menuContainer';

export default function Forgot() {

  return (
    <PageContainer title="Forgot Password">
        <FormContainer title="Forgot Password">
          <ForgotPasswordForm />
        </FormContainer>
        <MenuContainer goBack={true} />
    </PageContainer>
  )
}
