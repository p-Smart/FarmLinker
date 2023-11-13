import { Stack, TextField } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"
import Button from "../Button"
import { useState } from "react"



const BuyerForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
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
            onChange: (val) => setRegData( (prevVal) => ({fullname: val}) )
        },
        {
            label: 'Email address',
            onChange: (val) => setRegData( (prevVal) => ({email: val}) )
        },
        {
            label: 'Home Address',
            onChange: (val) => setRegData( (prevVal) => ({address: val}) )
        },
        {
            label: 'Default delivery address (can change later)',
            onChange: (val) => setRegData( (prevVal) => ({delivery_address: val}) )
        },
        {
            label: 'Password',
            onChange: (val) => setRegData( (prevVal) => ({pass: val}) )
        },
        
    ]

    return (
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
            />
        </Stack>
    )
}

export default BuyerForm