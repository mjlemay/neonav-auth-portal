import PageContainer from '../components/pageContainer'
import FormContainer from '../components/formContainer'
import LogoutForm from '../components/forms/logoutForm'

export default function Logout() {
  return (
    <PageContainer title="Logout">
        <FormContainer title="Logout">
            <LogoutForm />
        </FormContainer>
    </PageContainer>
  )
}
