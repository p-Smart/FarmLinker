import { Stack } from "@mui/material"
import TopNav from "../TopNav"
import Cart from "../Cart"



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