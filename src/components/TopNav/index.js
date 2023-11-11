import { Divider, Stack, Typography } from "@mui/material"
import {AiOutlineMail} from 'react-icons/ai'
import {SlLocationPin} from 'react-icons/sl'
import {FaFacebookF, FaYoutube, FaInstagram, FaRegUser} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {primary } from "src/theme/create-palette"
import uuid from "src/utils/uuid"
import Button from "../Button"
import {FiSearch} from 'react-icons/fi'
import {BsCart4} from 'react-icons/bs'
import NavButton from "./NavButton"
import { useGlobalContext } from "src/contexts/globalContext"

const toplinks = [{Icon: AiOutlineMail, title: 'info@farmlinker.com'}, {Icon: SlLocationPin, title: 'University of Ibadan'}]

const nav = [
    {
        title: 'Home',
        route: '/'
    },
    {
        title: 'About Us',
        route: '/'
    },
    {
        title: 'Products',
        route: '/'
    },
    {
        title: 'Contact',
        route: '/'
    },
]



const TopNav = () => {
    const {globalData, setOpenCart} = useGlobalContext()
    const paddingX = '150px'

    const navButtons = [
        {
            Icon: FiSearch,
            action: '',
            id: 'search'
        },
        {
            Icon: FaRegUser,
            action: '',
            id: 'user'
        },
        {
            Icon: BsCart4,
            action: setOpenCart(true),
            id: 'cart'
        }
    ]

    return (
        <Stack
        sx={{
            bgcolor: 'secondary.main'
        }}
        >
            <Stack direction='row'
            sx={{justifyContent: 'space-between', px: paddingX, py: '10px'}}
            >
                <Stack direction='row'
                sx={{gap: '20px'}}
                >
                    {
                    toplinks.map( ({title, Icon}) => (
                        <Stack
                        key={uuid()}
                        direction='row'
                        sx={{gap: '10px', alignItems: 'center'}}>
                            <Icon color={primary.main} />
                            <Typography sx={{fontWeight: 600, fontSize: '.9rem'}}>{title}</Typography>
                        </Stack>
                    ) )
                    }
                </Stack>
                <Stack direction='row'
                sx={{gap: '10px', color: 'neutral.800', alignItems: 'center'}}
                >
                <FaFacebookF/>
                <FaXTwitter />
                <FaYoutube />
                <FaInstagram />
                </Stack>
            </Stack>

            <Divider 
            sx={{
                borderColor: 'neutral.400'
            }}
            />

            <Stack
            direction='row'
            sx={{px: paddingX, py: '20px', alignItems: 'center', justifyContent: 'space-between'}}
            >
            <img 
            src="/assets/images/FarmLinker-wo-bg.png"
            style={{
                width: 633 / 3.7,
                height: 394 / 3.7,
                objectFit: 'contain',
            }}
            />

            <Stack direction='row'
            sx={{
                gap: '50px'
            }}
            >
            <Stack direction='row' 
            sx={{gap: '10px'}}>
                {
                    nav.map( ({title, route}) => (
                        <Button
                        key={uuid()}
                        variant='outlined'
                        title={title}
                        />
                    ) )
                }
            </Stack>

            <Stack direction='row'
            sx={{
                gap: '20px'
            }}
            >
                {
                    navButtons.map( ({Icon, action, id}) => (
                        <NavButton 
                        key={uuid()}
                        onClick={action}
                        >
                        <Icon size={18} />
                        {id==='cart' && <sup><Typography sx={{pl: '3px', mb: '10px'}}>{globalData?.cartNumber}</Typography></sup>}
                        </NavButton>
                    ) )
                }
            </Stack>
            </Stack>
            </Stack>
        </Stack>
    )
}


export default TopNav