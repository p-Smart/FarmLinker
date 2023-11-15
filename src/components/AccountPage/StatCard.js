import { Box, Stack, Typography } from "@mui/material"
import {MdProductionQuantityLimits} from 'react-icons/md'
import { neutral } from "src/theme/create-palette"
import { useBreakpoints } from "src/theme/mediaQuery"



const StatCard = ({title='Commodities',Icon=MdProductionQuantityLimits, IconColor='primary.main', value=68}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()

    return (
        <Stack
        sx={{
            p: '15px 20px',
            bgcolor: '#fff',
            boxShadow: '0 0 20px rgb(0,0,0,.125)',
            borderRadius: '8px',
            gap: '10px',
            // width: sm ? '100%' : 'fit-content',
            width: '100%',
        }}
        >
        <Stack
        direction='row'
        sx={{
            gap: '20px',
            alignItems: 'center'
        }}
        >
        <Stack 
        sx={{width: '50px', height: '50px', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', bgcolor: IconColor, color: '#fff'}}
        >
        <Icon
        size={28}
        />
        </Stack>
        <Typography
        variant="h6"
        >
        {title}
        </Typography>
        </Stack>
        <Typography
        variant="h5"
        sx={{textAlign: 'center'}}
        >
        {value}
        </Typography>
        </Stack>
    )
}

export default StatCard