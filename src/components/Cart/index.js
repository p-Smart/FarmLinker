import { Button, Divider, Stack, SwipeableDrawer, Typography } from "@mui/material"
import {GrClose} from 'react-icons/gr'
import { useGlobalContext } from "src/contexts/globalContext"
import { useBreakpoints } from "src/theme/mediaQuery"



const Cart = () => {
    const {openCart, setOpenCart} = useGlobalContext()
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <>
        <Stack
        sx={{
            position: 'fixed',
            right: openCart ? 0 : '-100%',
            transition: '.7s ease',
            width: xs ? '85%' : sm ? '65%' : md ? '50%' : lg ? '35%' : '25%',
            height: '100vh',
            p: '30px',
            bgcolor: 'neutral.50',
            boxShadow: '0 0 10px rgb(0,0,0,.125)',
            zIndex: 2,
            gap: '15px'
        }}
        >
        <Stack
        direction='row'
        sx={{
            justifyContent: 'space-between'
        }}
        >
        <Typography
        variant="h6"
        sx={{
            

        }}
        >
            Cart
        </Typography>
        <GrClose 
        style={{cursor: 'pointer'}} 
        onClick={() => setOpenCart(false)}
        />
        </Stack>
        <Divider 
        sx={{
            borderColor: 'neutral.200'
        }}
        />

        <Stack>
            <Typography
            variant="h6"
            >
                Your Cart is currently empty.
            </Typography>
        </Stack>
        </Stack>


        {
        openCart && 
        <div
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: '.7s ease',
            zIndex: 1,
        }}
        onClick={() => setOpenCart(false)}
        />
        }
        </>
    )
}

export default Cart