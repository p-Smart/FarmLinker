import { Slide, Stack, TextField } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"
import Button from "../Button"
import { useState } from "react"
import { useRegisterFormContext } from "src/contexts/registerFormContext"
import toast from 'react-hot-toast'
import { fetchData } from "src/utils/fetchData"
import { useRouter } from "next/router"



const FarmerForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const {activeTab} = useRegisterFormContext()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const initialRegData = {
        fullname: '',
        email: '',
        tel: '',
        address: '',
        farm_location: '',
        farming_ex: '',
        pass: ''
    }

    const [regData, setRegData] = useState(initialRegData)

    const form = [
        {
            label: 'Fullname',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, fullname: val}) )
        },
        {
            label: 'Email address',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, email: val}) ),
            type: 'email'
        },
        {
            label: 'Phone Number',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, tel: val}) ),
            type: 'number'
        },
        {
            label: 'Residential Address',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, address: val}) )
        },
        {
            label: 'Farm Location',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, farm_location: val}) )
        },
        {
            label: 'Years of Farming Experience',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, farming_ex: val}) ),
            type: 'number'
        },
        {
            label: 'Password',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, pass: val}) ),
            type: 'password'
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
                    userType: 'farmer'
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
            form.map ( ({label, onChange, type}) => (
                <TextField
                key={label}
                label={label}
                onChange={(e) => onChange && onChange(e.target.value)}
                type={type || 'text'}
                />
            ) )
            }

            <Button 
            title="Create Farmer Account"
            sx={{alignSelf: 'flex-start'}}
            loading={loading}
            type='submit'
            />
        </Stack>
        </Slide>
    )
}

export default FarmerForm