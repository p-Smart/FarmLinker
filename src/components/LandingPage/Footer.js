import { Divider, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import  {FiPhoneCall} from 'react-icons/fi'
import { SlLocationPin } from "react-icons/sl"
import { neutral } from "src/theme/create-palette"
import { useBreakpoints } from "src/theme/mediaQuery"
import uuid from "src/utils/uuid"

const contactLinks = [{Icon: SlLocationPin, title: 'Computer Science, University of Ibadan'}, {Icon: FiPhoneCall, title: '+234-801-1234-567'}, {Icon: AiOutlineMail, title: 'info@farmlinker.com'}]


const Footer = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const router = useRouter()
    const landingPage = router.pathname==='/'

    return (
        <Stack
        component='footer'
        sx={{
            bgcolor: landingPage ? '#071c21' : 'secondary.main',
            pt: sm ? '50px' : '100px',
        }}
        >
        <Stack
        sx={{
            px: sm ? '20px' : '50px',
            pb: '30px',
            justifyContent: 'space-between',
            '& p': {color: landingPage ? 'neutral.50' : 'neutral.800'},
            color: landingPage ? 'neutral.50' : 'neutral.800'
        }}
        >
        <Stack
        sx={{gap: '20px', width: md ? '100%' : lg ? '40%' :  xl ? '30%' : '25%'}}
        >
        <img 
        src={landingPage ? '/assets/images/farmlinker-bg-white.png' : '/assets/images/FarmLinker-wo-bg.png'}
        style={{
            width: sm ? 633/4 : 633 / 3.7,
            height: sm ? 394/4 : 394 / 3.7,
            objectFit: 'contain',
        }}
        />
        <Typography>
        Market your farm products and gain access to veterans in the farming industry.
        </Typography>
        <Stack
        sx={{gap: '10px'}}
        >
        {
        contactLinks.map( ({title, Icon}) => (
            <Stack key={uuid()} 
            direction='row'
            sx={{gap: '10px', alignItems: 'center'}}
            >
            <Icon />
            <Typography>{title}</Typography>
            </Stack>
        ) )
        }
        </Stack>
        <Stack direction='row'
        sx={{gap: '10px'}}
        >
        <FaFacebookF/>
        <FaXTwitter />
        <FaYoutube />
        <FaInstagram />
        </Stack>
        </Stack>
        </Stack>

        <Divider
        sx={{
            borderWidth: '1px',
            borderColor: 'neutral.400',
            width: '100%',
        }}
        />

        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '30px 50px',
            bgcolor: '#071c21',
            color: 'neutral.50',
            ...md && {gap: '20px'}
        }}
        >
            <Typography>
            Copyright ©<strong>FarmLinker</strong> All Right Reserved.
            </Typography>
            <Stack
            direction='row'
            sx={{
                '& p': {fontWeight: 600},
                gap: '20px'
            }}
            >
                <Typography>Terms of Service</Typography>
                <Typography>Claim</Typography>
                <Typography>Privacy Policy</Typography>
            </Stack>
        </Stack>
        </Stack>
    )
}


export default Footer