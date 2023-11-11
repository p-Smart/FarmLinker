import { Button as MUIButton, CircularProgress, Stack, Typography } from "@mui/material"
import { forwardRef } from "react"
import { primary } from "src/theme/create-palette"



const Button = forwardRef( ({
    title,
    children,
    Icon,
    IconColor,
    IconSize,
    IconPlacement='right',
    loading,
    loadingText, 
    sx, 
    variant='contained', 
    roundedCorners=true,
    squareCorners,
    border,
    ...props
}, ref) => {

return (
    <MUIButton
    ref={ref}
    direction='row'
    disabled={loading}
    sx={{
        display: 'flex',
        textTransform: 'unset',
        borderRadius: variant!=='outlined' ? '5px' : 'unset',
        ...variant!=='normal' && {
            color: "neutral.50",
            background: variant==='outlined' ? 'transparent' : primary.mainGradient,
            '&:hover': {
                background: variant==='outlined' ? 'transparent' : primary.mainGradient,
            },
            gap: '10px',
            ...variant!=='outlined' && {
                p: '10px 40px',
            },
            alignItems: 'center',
            cursor: !loading ? 'pointer' : 'not-allowed',
            ...loading && variant !== 'outlined' && {bgcolor: 'neutral.500'},
            alignSelf: 'flex-end',
            '&.Mui-disabled': {
            bgcolor: variant==='outlined' ? 'transparent' : 'neutral.500',
            color: 'neutral.400',
            ...border && {border: '1px solid', borderColor: 'primary.main'},
        },
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
            <Typography sx={{fontWeight: 600, fontSize: '.85rem'}}>
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

} )

export default Button