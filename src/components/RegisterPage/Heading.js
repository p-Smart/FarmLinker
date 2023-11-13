import { Divider, Stack, Typography } from "@mui/material"
import Button from "../Button"
import { useRouter } from "next/router"
import { useBreakpoints } from "src/theme/mediaQuery"


const Heading = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'
    const router = useRouter()


    return (
        <Stack
        sx={{
            height: '300px',
            width: '100%',
            backgroundImage: 'url(/assets/images/register-page0.jpg)',
            position: 'relative',
            '&::before': {
                content: "''",
                width: '100%',
                height: '100%',
                background: '#071c1f none repeat scroll 0 0',
                opacity: 0.9,
                position: 'absolute',
            }
        }}
        >
        <Stack
        direction={sm ? 'column' : 'row'}
        sx={{
            zIndex: 1,
            justifyContent: sm ? 'center' : 'space-between',
            alignItems: 'center',
            height: '100%',
            px: paddingX,
            ...sm && {gap: '20px'}
        }}
        >
        <Stack sx={{gap: '20px'}}>
        <Typography sx={{fontWeight: 600, color: 'primary.main'}}>WELCOME TO OUR STORE</Typography>
        <Typography 
        variant={sm ? 'h4' : md ? 'h3' : "h2"}
        sx={{color: 'neutral.50'}}
        >Create account</Typography>
        </Stack>

        <Stack
        direction='row'
        sx={{gap: sm ? '20px' : '10px', alignItems: 'center'}}
        >
        <Button
        variant="text"
        title="Home"
        sx={{color: 'neutral.50', p: 0}}
        onClick={() => router.push('/')}
        />
        <Divider
        sx={{borderWidth: '1px', borderColor: 'neutral.400', height: '10px'}}
        />
        <Typography sx={{color: 'primary.main', fontWeight: 600}}>Create Account</Typography>
        </Stack>
        </Stack>
        </Stack>
    )
}

export default Heading