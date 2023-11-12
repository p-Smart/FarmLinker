import { Stack } from "@mui/material"
import TopNav from "../TopNav"
import Cart from "../Cart"
import GlobalContext from "src/contexts/globalContext"
import { useState } from "react"
import Footer from "../LandingPage/Footer"



const LandingPageLayout = ({children}) => {

    return (
        <Stack>
        <TopNav />
        {children}

        <Cart />

        <Footer />
        </Stack>
    )
}

export default LandingPageLayout