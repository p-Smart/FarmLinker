import { Button, Stack, Typography } from "@mui/material"



const Product = ({title, price, image}) => {


    return (
        <Button
        sx={{
            minWidth: 'unset',
            p: 'unset',
            height: '400px',
            display: 'block',
            textTransform: 'unset',
            transition: '.7s ease',
            boxShadow: '0 0 10px rgb(0,0,0,.125)',
            '&:hover': {
                boxShadow: '0 0 50px rgb(0,0,0,.325)',
            }
        }}
        >
        <Stack
        sx={{
            width: '100%',
            height: '70%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f9f9f9'
        }}
        >
        <img 
        src={image}
        style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
        }}
        />
        </Stack>
        <Stack
        sx={{
            bgcolor: '#fff',
            height: '30%',
            alignItems: 'center',
            justifyContent: "center",
            gap: '15px'
        }}
        >
            <Typography sx={{fontWeight: 600, color: 'neutral.800'}}>{title}</Typography>
            <Typography
            variant="h6"
            sx={{color: 'primary.main'}}
            >
            ₦{price}
            </Typography>
        </Stack>
        </Button>
    )
}

export default Product