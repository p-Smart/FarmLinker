import { MenuItem, Select, Slide, Stack, TextField } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"
import Button from "../Button"
import { useState } from "react"
import { useRegisterFormContext } from "src/contexts/registerFormContext"
import { specializations } from "./register-data"



const ConsultantForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const {activeTab} = useRegisterFormContext()
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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Slide
        direction="left"
        mountOnEnter
        unmountOnExit
        in={activeTab}
        >
        <Stack
        component='form'
        onSubmit={handleSubmit}
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
                <Select
                label={label}
                required
                onChange={(e) => onChange && onChange(e.target.value)}
                sx={{width: '100%'}}
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
                }
                </>
            ) )
            }

            <Button 
            title="Create Consultant Account"
            type='submit'
            sx={{alignSelf: 'flex-start'}}
            />
        </Stack>
        </Slide>
    )
}

export default ConsultantForm