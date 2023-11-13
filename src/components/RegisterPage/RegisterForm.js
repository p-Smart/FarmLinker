import { Divider, Grid, Stack, Typography, Button as MUIButton } from "@mui/material"
import { useState } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"
import BuyerForm from "./BuyerForm"
import FarmerForm from "./FarmerForm"
import ConsultantForm from "./ConsultantForm"



const RegisterForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'


    const [activeTab, setActiveTab] = useState('buyer')


    const accountType = [
        {
            title: 'buyer',
            action: null
        },
        {
            title: 'farmer',
            action: null
        },
        {
            title: 'consultant',
            action: null
        },
        
    ]

    return (
        <Stack
        sx={{
            alignItems: 'center',
            p: `50px ${paddingX}`,
            gap: '30px'
        }}
        >
        <Stack
        direction='row'
        sx={{gap: '20px'}}
        >
            <Typography sx={{fontWeight: 600}}>Select Account Type: </Typography>
            <Stack
            direction='row'
            sx={{
                gap: '30px'
            }}
            >
            {
            accountType.map( ({title, action}) => (
                <Tab
                key={title}
                active={title === activeTab}
                title={title}
                onClick={() => setActiveTab(title)}
                />
            ) )
            }
            </Stack>
        </Stack>

        <Typography
        variant={sm ? 'h5' : lg ? "h4" : "h3"}
        >
            Create Account
        </Typography>
        <Typography>
        {`Please Register for a ${activeTab} account by filling the form below.`}
        </Typography>

        {
        activeTab==='buyer' &&
        <BuyerForm />
        }
        {
        activeTab==='farmer' &&
        <FarmerForm />
        }
        {
        activeTab==='consultant' &&
        <ConsultantForm />
        }
        </Stack>
    )
}

export default RegisterForm

















const Tab = ({title, active=false, onClick}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    
    return (
        <MUIButton
        sx={{
            minWidth: 'unset',
            p: 'unset',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            transition: '.7s ease'
        }}
        onClick={onClick}
        >
            <Typography
            sx={{
                textTransform: 'uppercase',
                color: active ?  'primary.main' : 'neutral.800',
                ...sm && {fontSize: '.85rem'}
            }}
            variant="h6"
            >
                {title}
            </Typography>
            <Divider
            sx={{
                borderWidth: '1px',
                borderColor: active ? 'primary.main' : 'neutral.400',
                width: '120%',
            }}
            />
        </MUIButton>
    )
}