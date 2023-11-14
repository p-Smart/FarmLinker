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
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, fullname: val}) )
        },
        {
            label: 'Email address',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, email: val}) )
        },
        {
            label: 'Phone number',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, tel: val}) )
        },
        {
            label: 'Specialization',
            onChange: (val) => setRegData( (prevVal) => ({...prevVal, specialization: val}) ),
            select: specializations
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
            form.map ( ({label, onChange, select}) => (
                <>
                {
                !select ?
                <TextField
                key={label}
                label={label}
                onChange={(e) => onChange && onChange(e.target.value)}
                type={label==='Password' ? "password" : 'text'}
                /> :
                <Select
                defaultValue='default'
                label={label}
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
            sx={{alignSelf: 'flex-start'}}
            onClick={() => console.log(regData)}
            />
        </Stack>
        </Slide>
    )
}

export default ConsultantForm