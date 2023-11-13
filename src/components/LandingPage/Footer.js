import { Divider, Stack, Typography } from "@mui/material"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import  {FiPhoneCall} from 'react-icons/fi'
import { SlLocationPin } from "react-icons/sl"
import { useBreakpoints } from "src/theme/mediaQuery"
import uuid from "src/utils/uuid"

const contactLinks = [{Icon: SlLocationPin, title: 'Computer Science, University of Ibadan'}, {Icon: FiPhoneCall, title: '+234-801-1234-567'}, {Icon: AiOutlineMail, title: 'info@farmlinker.com'}]


const Footer = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()

    return (
        <Stack
        component='footer'
        sx={{
            bgcolor: '#071c21',
            pt: sm ? '50px' : '100px',
            '& p': {color: 'neutral.50'},
            color: 'neutral.50'
        }}
        >
        <Stack
        sx={{
            px: sm ? '20px' : '50px',
            pb: '30px',
            justifyContent: 'space-between'
        }}
        >
        <Stack
        sx={{gap: '20px', width: md ? '100%' : lg ? '40%' :  xl ? '30%' : '25%'}}
        >
        <img 
        src="/assets/images/farmlinker-bg-white.png"
        style={{
            width: sm ? 633/4 : 633 / 3.7,
            height: sm ? 394/4 : 394 / 3.7,
            objectFit: 'contain',
        }}
        />
        <Typography>
        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
        </Typography>
        <Stack
        sx={{gap: '10px'}}
        >
        {
        contactLinks.map( ({title, Icon}) => (
            <Stack key={uuid()} 
            direction='row'
            sx={{gap: '10px'}}
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