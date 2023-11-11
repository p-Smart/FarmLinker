import { Button, Stack, SwipeableDrawer, Typography } from "@mui/material"
import {GrClose} from 'react-icons/gr'
import { useGlobalContext } from "src/contexts/globalContext"



const Cart = () => {
    const {openCart, setOpenCart} = useGlobalContext()


    return (
        <Stack
        sx={{
            position: 'fixed',
            right: openCart ? 0 : '-100%',
            transition: '.7s ease',
            width: '30%',
            height: '100vh',
            p: '15px 10px',
            bgcolor: 'neutral.50',
        }}
        >
        <Stack
        direction='row'
        sx={{
            justifyContent: 'space-between'
        }}
        >
        <Typography>
            Cart
        </Typography>
        <GrClose 
        style={{cursor: 'pointer'}} 
        onClick={() => setOpenCart(false)}
        />
        </Stack>
        </Stack>
        
    )
}

export default Cart