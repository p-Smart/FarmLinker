import { Box, MenuItem, Select, Slide, Stack, TextField, Typography } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"
import Button from "../Button"
import { useState } from "react"
import { useRegisterFormContext } from "src/contexts/registerFormContext"
import { specializations } from "./register-data"
import { useRouter } from "next/router"
import toast from 'react-hot-toast'
import { fetchData } from "src/utils/fetchData"


const ConsultantForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const {activeTab} = useRegisterFormContext()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const initialRegData = {
        fullname: '',
        email: '',
        tel: '',
        specialization: '',
        pass: ''
    }

    const [regData, setRegData] = useState(initialRegData)

    const form = [
        {
            label: 'Fullname',
            type: 'text',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, fullname: val}) )
        },
        {
            label: 'Email address',
            type: 'email',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, email: val}) )
        },
        {
            label: 'Phone number',
            type: 'tel',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, tel: val}) )
        },
        {
            label: 'Specialization',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, specialization: val}) ),
            select: specializations
        },
        {
            label: 'Password',
            type: 'password',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, pass: val}) )
        },
        
    ]

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const {message} = await fetchData({
                endpoint: '/register',
                payload: {
                    ...regData,
                    userType: 'consultant'
                }
            })
            
            toast.success(message)
            router.push('/login')
        }
        catch(err){
            toast.error(err.message)
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <Slide
        direction="left"
        mountOnEnter
        unmountOnExit
        in={activeTab}
        >
        <Stack
        onSubmit={handleRegister}
        component='form'
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
            form.map ( ({label, onChange, type, select}) => (
                <>
                {
                !select ?
                <TextField
                key={label}
                label={label}
                type={type}
                onChange={(e) => onChange && onChange(e.target.value)}
                required
                /> :
                <Box sx={{width: '100%'}}>
                <Typography sx={{fontWeight: 300, color: 'neutral.600'}}>{label}</Typography>
                <Select
                label={label}
                required
                onChange={(e) => onChange && onChange(e.target.value)}
                sx={{width: '100%', mt: '5px'}}
                >
                {
                    select.map( ({label, id}) => (
                        <MenuItem
                        key={id}
                        value={id}
                        >
                        {label}
                        </MenuItem>
                    ) )
                }
                </Select>
                </Box>
                }
                </>
            ) )
            }

            <Button 
            title="Create Consultant Account"
            sx={{alignSelf: 'flex-start'}}
            loading={loading}
            type='submit'
            />
        </Stack>
        </Slide>
    )
}

export default ConsultantForm