import { Stack, Typography } from "@mui/material"
import Stats from "src/components/AccountPage/Stats"
import Tools from "src/components/AccountPage/Tools"
import PageHeading from "src/components/PageHeading"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"
import { useBreakpoints } from "src/theme/mediaQuery"



const AccountPage = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'


    return (
        <LandingPageLayout>
        <PageHeading 
        title='Account' 
        topTitle='Your Dashboard'
        />
        <Stack
        sx={{
            p: `50px ${paddingX}`,
            gap: '50px'
        }}
        >
        <Typography
        variant={sm ? 'h6' : "h5"}
        sx={{
            textAlign: 'center'
        }}
        >
            Hi, Farmer
        </Typography>
        
        <Stats />

        <Tools />
        </Stack>
        </LandingPageLayout>
    )
}

export default AccountPage