import { Stack, Typography } from "@mui/material"
import Grid from "../CustomGrid"
import uuid from "src/utils/uuid"


const mockProducts = [
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png'
    },
    
    
]


const Products = () => {


    return (
        <Stack
        sx={{
            p: '100px 150px',
            gap: '50px',
        }}
        >
            <Typography variant="h2"
            sx={{textAlign: 'center'}}
            >
                Commodities
            </Typography>
            <Stack></Stack>

            <Grid
            columns={4}
            sx={{gap: '30px'}}
            gridWrapSx={{justifyContent: 'space-between'}}
            >
            {
            mockProducts.map( ({title, price, image}) => (
                <Product 
                key={uuid()}
                title={title}
                price={price}
                image={image}
                />
            ) )
            }
            </Grid>
        </Stack>
    )
}

export default Products



const Product = ({title, price, image}) => {


    return (
        <Stack
        sx={{            
            height: '400px',
            boxShadow: '0 0 10px rgb(0,0,0,.125)'
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
            justifyContent: "center"
        }}
        >
            <Typography sx={{fontWeight: 600}}>{title}</Typography>
            <Typography
            variant="h6"
            sx={{color: 'primary.main'}}
            >
            ₦{price}
            </Typography>
        </Stack>
        </Stack>
    )
}