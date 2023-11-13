import { Button, Stack } from "@mui/material"


const NavButton = ({children, ...props}) => {


    return (
        <Button
        direction='row'
        sx={{
            width: '55px',
            height: '55px',
            minWidth: 'unset',
            p: 'unset',
            borderRadius: 'unset',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgb(0,0,0,.125)',
            bgcolor: 'neutral.50',
            color: 'neutral.800',
            '&:hover': {
                bgcolor: 'primary.main',
                color: 'neutral.50',
            },
            position: 'relative'
        }}
        {...props}
        >
        {children}
        </Button>
    )
}

export default NavButton