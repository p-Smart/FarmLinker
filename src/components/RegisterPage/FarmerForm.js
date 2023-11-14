import { Slide, Stack, TextField } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"
import Button from "../Button"
import { useState } from "react"
import { useRegisterFormContext } from "src/contexts/registerFormContext"



const FarmerForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const {activeTab} = useRegisterFormContext()
    const initialRegData = {
        fullname: '',
        email: '',
        tel: '',
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
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, email: val}) )
        },
        {
            label: 'Phone Number',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, tel: val}) )
        },
        {
            label: 'Farm Location',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, farm_location: val}) )
        },
        {
            label: 'Years of Farming Experience',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, farming_ex: val}) )
        },
        {
            label: 'Password',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, pass: val}) )
        },
        
    ]

    return (
        <Slide
        direction="left"
        mountOnEnter
        unmountOnExit
        in={activeTab}
        >
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
            form.map ( ({label, onChange}) => (
                <TextField
                key={label}
                label={label}
                onChange={(e) => onChange && onChange(e.target.value)}
                type={label==='Password' ? "password" : 'text'}
                />
            ) )
            }

            <Button 
            title="Create Farmer Account"
            sx={{alignSelf: 'flex-start'}}
            onClick={() => console.log(regData)}
            />
        </Stack>
        </Slide>
    )
}

export default FarmerForm