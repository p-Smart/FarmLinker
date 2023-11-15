import { Stack, Typography } from "@mui/material"
import { useState } from "react"
import AddProduct from "src/components/AccountPage/AddProduct"
import ConsultationRequest from "src/components/AccountPage/ConsultationRequest"
import Stats from "src/components/AccountPage/Stats"
import Tools from "src/components/AccountPage/Tools"
import PageHeading from "src/components/PageHeading"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"
import AccountContext from "src/contexts/accountContext"
import { useBreakpoints } from "src/theme/mediaQuery"



const AccountPage = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'
    const [openAddProduct, setOpenAddProduct] = useState(false)
    const [openConsultationRequest, setOpenConsultationRequest] = useState(false)



    return (
        <AccountContext.Provider
        value={{
            openAddProduct, setOpenAddProduct,
            openConsultationRequest, setOpenConsultationRequest
        }}
        >
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
        <ConsultationRequest />
        </Stack>


        <AddProduct />
        </LandingPageLayout>
        </AccountContext.Provider>
    )
}

export default AccountPage