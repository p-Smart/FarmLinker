import { Button as MUIButton, CircularProgress, Stack, Typography } from "@mui/material"
import { forwardRef } from "react"
import { primary } from "src/theme/create-palette"



const Button = ({
    title='',
    children,
    Icon,
    IconColor,
    IconSize,
    IconPlacement='right',
    loading=false,
    loadingText='', 
    sx,
    variant='contained',
    roundedCorners=true,
    squareCorners=false,
    border=false,
    ...props
}) => {

return (
    <MUIButton
    direction='row'
    disabled={loading}
    sx={{
        display: 'flex',
        textTransform: 'unset',
        borderRadius: 'unset',
        color: variant==='text' || variant==='outlined' ? "neutral.800" : 'neutral.50',
        border: '1px solid',
        borderColor: 'transparent',
        bgcolor: variant==='outlined' || variant==='text' ? 'transparent' : primary.main,
        '&:hover': {
            bgcolor: variant==='outlined' ? 'neutral.800' : variant==='text' ? 'transparent' : 'neutral.50',
            color: variant==='outlined' ? 'neutral.50' : variant==='text' ? 'primary.main' : 'neutral.800',
            borderColor: !variant ? 'neutral.800' : 'unset',
        },
        ...variant==='outlined' && {
            boxShadow: '0 0 10px rgb(0,0,0,.125)'
        },
        gap: '10px',
        p: '10px 40px',
        alignItems: 'center',
        cursor: !loading ? 'pointer' : 'not-allowed',
        ...loading && variant !== 'outlined' && {bgcolor: 'neutral.500'},
        alignSelf: 'flex-end',
        '&.Mui-disabled': {
        bgcolor: variant==='outlined' ? 'transparent' : 'neutral.500',
        color: 'neutral.400',
        ...border && {border: '1px solid', borderColor: 'primary.main'},
        },
        ...sx,
    }}
    {...props}
    >
        {!loading && IconPlacement==='left' && Icon && <Icon size={20} />}
        {
            !loading ?
            (
                title ?
            <Typography sx={{fontWeight: 600}}>
            {title}
            </Typography> :
                children
            ) :
            <Stack direction='row' 
            sx={{gap: '5px'}}
            >
            <CircularProgress sx={{color: variant==='outlined' ? "neutral.900" : "neutral.50"}} size={25} />
            {
                loadingText &&
                <Typography>
                    {loadingText}
                </Typography>
            }
            </Stack>
        }
        {!loading && IconPlacement==='right' && Icon && 
        <Icon 
        size={IconSize || 20} 
        color={IconColor} 
        />}
    </MUIButton>
)

}

export default Button