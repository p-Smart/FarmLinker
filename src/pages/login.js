import Heading from "src/components/LoginPage/Heading"
import LoginForm from "src/components/LoginPage/LoginForm"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"



const LoginPage = () => {

    return (
        <LandingPageLayout>
        <Heading />
        <LoginForm />
        </LandingPageLayout>
    )
}

export default LoginPage