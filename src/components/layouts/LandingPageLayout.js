import { Stack } from "@mui/material"
import TopNav from "../TopNav"
import Cart from "../Cart"
import GlobalContext from "src/contexts/globalContext"
import { useState } from "react"



const LandingPageLayout = ({children}) => {

    return (
        <Stack>
        <TopNav />
        {children}

        <Cart />
        </Stack>
    )
}

export default LandingPageLayout