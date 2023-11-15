import { Stack, Typography } from "@mui/material"
import Stats from "src/components/AccountPage/Stats"
import PageHeading from "src/components/PageHeading"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"
import { useBreakpoints } from "src/theme/mediaQuery"
import uuid from "src/utils/uuid"



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

        <Stack sx={{gap: '20px'}}>
        <Typography
        variant={sm ? 'h5' : lg ? "h4" : "h3"}
        >
            Tools
        </Typography>

        
        </Stack>
        </Stack>
        </LandingPageLayout>
    )
}

export default AccountPage