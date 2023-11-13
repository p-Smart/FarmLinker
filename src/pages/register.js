import { Divider, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import Button from "src/components/Button"
import Heading from "src/components/RegisterPage/Heading"
import RegisterForm from "src/components/RegisterPage/RegisterForm"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"
import { useBreakpoints } from "src/theme/mediaQuery"



const RegisterPage = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'
    const router = useRouter()

    return (
        <LandingPageLayout>
        <Heading />
        <RegisterForm />
        </LandingPageLayout>
    )
}

export default RegisterPage