import Heading from "src/components/RegisterPage/Heading"
import RegisterForm from "src/components/RegisterPage/RegisterForm"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"



const RegisterPage = () => {

    return (
        <LandingPageLayout>
        <Heading />
        <RegisterForm />
        </LandingPageLayout>
    )
}

export default RegisterPage