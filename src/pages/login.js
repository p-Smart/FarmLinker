import LoginForm from "src/components/LoginPage/LoginForm"
import PageHeading from "src/components/PageHeading"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"



const LoginPage = () => {

    return (
        <LandingPageLayout>
        <PageHeading title='Login' />
        <LoginForm />
        </LandingPageLayout>
    )
}

export default LoginPage