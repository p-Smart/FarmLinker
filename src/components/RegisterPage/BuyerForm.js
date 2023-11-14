import { Slide, Stack, TextField } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"
import Button from "../Button"
import { useState } from "react"
import { useRegisterFormContext } from "src/contexts/registerFormContext"



const BuyerForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const {activeTab} = useRegisterFormContext()
    const initialRegData = {
        fullname: '',
        email: '',
        address: '',
        delivery_address: '',
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
            label: 'Home Address',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, address: val}) )
        },
        {
            label: 'Default delivery address (can change later)',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, delivery_address: val}) )
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
            title="Create Buyer Account"
            sx={{alignSelf: 'flex-start'}}
            onClick={() => console.log(regData)}
            />
        </Stack>
        </Slide>
    )
}

export default BuyerForm