import { Stack } from "@mui/material"
import { useState } from "react"
import {BsCheckLg} from 'react-icons/bs'
import { primary } from "src/theme/create-palette"


const CheckBox = ({check, onChange}) => {

    const handleToggle = (e) => {
        e.stopPropagation()
        onChange && onChange(!check)
    }

    return (
        <Stack
        sx={{
            width: '15px',
            height: '15px',
            borderRadius: '3.5px',
            boxShadow: '0 0 10px rgb(0,0,0,.125)',
            bgcolor: check ? '#F9F5FF' : 'transparent',
            border: '.5px solid',
            borderColor: check ? 'primary.main' : 'neutral.300',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
        }}
        onClick={handleToggle}
        >
        {
            check &&
            <BsCheckLg 
            size={15} 
            color={primary.main}
            />
        }
        </Stack>
    )
}

export default CheckBox