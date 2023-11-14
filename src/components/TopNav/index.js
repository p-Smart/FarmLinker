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
import { useRouter } from "next/router"
import { useState } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"

const toplinks = [{Icon: AiOutlineMail, title: 'info@farmlinker.com'}, {Icon: SlLocationPin, title: 'University of Ibadan'}]

const nav = [{title: 'Home', route: '/'}, {title: 'About Us',route: '#about-us'}, {title: 'Products', route: '/products'}, {title: 'Login', route: '/login'},]

const accountOptions = [{title: 'My Account', route: '/account'}, {title: 'Login', route: '/login'}, {title: 'Register', route: '/register'}]



const TopNav = () => {
    const {globalData, setOpenCart} = useGlobalContext()
    const router = useRouter()
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'

    const [openAccountPopOver, setOpenAccountPopOver] = useState(false)

    const navButtons = [
        {
            Icon: FiSearch,
            action: '',
            id: 'search'
        },
        {
            Icon: FaRegUser,
            action: () => setOpenAccountPopOver(!openAccountPopOver),
            id: 'user'
        },
        {
            Icon: BsCart4,
            action: () => setOpenCart(true),
            id: 'cart'
        }
    ]

    return (
        <Stack
        sx={{
            bgcolor: router.pathname==='/' ? 'secondary.main' : 'neutral.50',
            zIndex: 10
        }}
        >
            <Stack 
            direction={sm ? 'column' : 'row'}
            sx={{justifyContent: 'space-between', px: paddingX, py: '10px', ...sm && {alignItems: 'center', gap: '10px'}}}
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
                borderColor: 'neutral.200'
            }}
            />

            <Stack
            direction={md ? 'column' : 'row'}
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

            <Stack 
            direction={md ? 'column' : 'row'}
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
                        variant='text'
                        title={title}
                        sx={{p: '5px 10px', ...route===router.pathname && {color: 'primary.main'}}}
                        onClick={() => router.push(route)}
                        />
                    ) )
                }
            </Stack>

            <Stack 
            direction='row'
            sx={{
                gap: '20px',
                ...md && {justifyContent: 'center'}
            }}
            >
                {
                    navButtons.map( ({Icon, action, id}) => (
                        <NavButton 
                        key={uuid()}
                        onClick={(e) => {e.stopPropagation(); action && action()}}
                        // onMouseOver={() => action && action()}
                        >
                        <Icon size={18} />
                        {id==='cart' && <sup><Typography sx={{pl: '3px', mb: '10px'}}>{globalData?.cartNumber}</Typography></sup>}

                        {id==='user' && openAccountPopOver &&
                        <Stack
                        sx={{
                            position: 'absolute',
                            width: 'max-content',
                            top: 'calc(100% + 10px)',
                            boxShadow: '0 0 10px rgb(0,0,0.125)',
                            bgcolor: 'neutral.50',
                            gap: '20px',
                            p: '30px 30px',
                            textTransform: 'capitalize',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start'
                        }}
                        >
                        {
                        accountOptions.map( ({title, route}) => (
                            <Button
                            key={uuid()}
                            title={title}
                            variant="text"
                            onClick={() => router.push(route)}
                            component='span'
                            sx={{p: 0, alignSelf: 'flex-start'}}
                            />
                        ) )
                        }
                        </Stack>
                        }
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