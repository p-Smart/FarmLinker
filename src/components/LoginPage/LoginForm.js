import { Divider, Grid, Stack, Typography, Button as MUIButton, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useRouter } from "next/router"
import Button from "../Button"



const LoginForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'

    const router = useRouter()
    const initialLoginData = {
        email: '',
        pass: ''
    }

    const [loginData, setLoginData] = useState(initialLoginData)

    const form = [
        {
            label: 'Email address',
            type: 'email',
            onChange: (val) => setLoginData( (prevVal) => ({...prevVal, email: val}) )
        },
        {
            label: 'Password',
            type: 'password',
            onChange: (val) => setLoginData( (prevVal) => ({...prevVal, pass: val}) )
        },
        
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    

    return (
        <form
        onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `50px ${paddingX}`,
            gap: '30px'
        }}
        >
        <Typography
        variant={sm ? 'h5' : lg ? "h4" : "h3"}
        >
            Login
        </Typography>
        <Typography>
        {`Please login by supplying the details below.`}
        </Typography>

        <Stack
        sx={{
            width: sm ? '100%' : md ? '80%' : '50%',
            alignItems: 'center',
            gap: '30px',
            '& .MuiTextField-root': {
                width: '100%'
            }
        }}
        >
            {
            form.map ( ({label, onChange, type}) => (
                <TextField
                key={label}
                label={label}
                onChange={(e) => onChange && onChange(e.target.value)}
                type={type}
                required
                />
            ) )
            }

            <Button 
            title="Sign In"
            type='submit'
            sx={{alignSelf: 'flex-start'}}
            onClick={() => console.log(loginData)}
            />
        </Stack>

        <Stack direction='row'>
            <Typography>{`Don't have an account?`}</Typography>
            <Button
            title="Create Account"
            variant="text"
            sx={{p: 0}}
            onClick={() => router.push('/register')}
            />
        </Stack>
        </form>
    )
}

export default LoginForm

















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