import { Collapse, Button as MUIButton, Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { FaExclamation, FaMinus, FaPlus } from "react-icons/fa"
import { primary } from "src/theme/create-palette"
import { useBreakpoints } from "src/theme/mediaQuery"



const FilterCard = ({title, children}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()

    const [expanded, setExpanded] = useState(!md)

    useEffect( () => {
        setExpanded(!md)
    }, [md] )


    return (
        <Stack
        sx={{
            p: '20px 20px 10px 20px',
            boxShadow: '0 0 10px rgb(0,0,0,.125)',
            border: '1px solid',
            borderColor: 'neutral.300',
            transition: '1s ease',
            gap: '15px',
            // width: xl ? '30%' : '300px'
        }}
        >
        <Stack
        direction='row'
        sx={{justifyContent: 'space-between'}}
        >
        <Stack
        direction='row'
        sx={{
            gap: '15px'
        }}
        >
        <FaExclamation
        size={20}
        style={{
            color: primary.main,
            transform: 'rotate(90deg)'
        }}
        />
        <Typography variant="h6">
            {title}
        </Typography>
        </Stack>

        <MUIButton
        sx={{color: 'neutral.400', p: '2px', minWidth: 'unset', '&:hover': {color: 'primary.main'}}}
        onClick={() => setExpanded(!expanded)}
        >
            {
                expanded ? <FaMinus /> : <FaPlus />
            }
        </MUIButton> 
        </Stack>

        <Collapse in={expanded}>
        {children}
        </Collapse>
        </Stack>
    )
}

export default FilterCard