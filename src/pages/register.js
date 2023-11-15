import PageHeading from "src/components/PageHeading"
import RegisterForm from "src/components/RegisterPage/RegisterForm"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"



const RegisterPage = () => {

    return (
        <LandingPageLayout>
        <PageHeading 
        title='Create Account'
        />
        <RegisterForm />
        </LandingPageLayout>
    )
}

export default RegisterPage