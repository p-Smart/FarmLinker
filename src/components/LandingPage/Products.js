import { Divider, Button as MUIButton, Stack, Typography } from "@mui/material"
import Grid from "../CustomGrid"
import uuid from "src/utils/uuid"
import Button from "../Button"
import { useState } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"


const mockProducts = [
    {
        title: 'Banana',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Maize',
        price: '1450',
        image: '/assets/images/5_acfd9bef-0515-4547-8715-ae9dba6bc0b0_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/18_829b2943-5bb4-4e3e-ac28-668e33e09ee3_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Banana',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Maize',
        price: '1450',
        image: '/assets/images/5_acfd9bef-0515-4547-8715-ae9dba6bc0b0_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Watermelon',
        price: '1200',
        image: '/assets/images/18_829b2943-5bb4-4e3e-ac28-668e33e09ee3_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Banana',
        price: '1200',
        image: '/assets/images/2_dfb555bf-4369-4213-9642-1cdc34ae98ea_600x.png',
        category: 'Vegetables'
    },
    {
        title: 'Maize',
        price: '1450',
        image: '/assets/images/5_acfd9bef-0515-4547-8715-ae9dba6bc0b0_600x.png',
        category: 'Vegetables'
    }
]

const mockCategories = ['Vegetables', 'Fruits', 'Food & Drinks', 'Dried Foods']


const Products = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'
    const [activeCategory, setActiveCategory] = useState('Vegetables')


    return (
        <Stack
        sx={{
            p: `100px ${paddingX}`,
            gap: '50px',
        }}
        >
            <Typography 
            variant={sm ? 'h4' : md ? 'h3' : "h2"}
            sx={{textAlign: 'center'}}
            >
                Commodities
            </Typography>
            {/* Categories */}
            <Grid
            columns={sm ? 2 : md ? 3 : 4}
            sx={{gap: '50px', width: '100%', justifyContent: 'center'}}
            gridWrapSx={{
                gap: '50px'
            }}
            >
            {
            mockCategories.map( (category) => (
                <Category 
                key={category}
                active={category === activeCategory}
                title={category}
                onClick={() => setActiveCategory(category)}
                />
            ) )
            }
            </Grid>

            <Grid
            columns={sm ? 2 : md ? 3 : 4}
            sx={{
                gap: '30px'
            }}
            gridWrapSx={{
                justifyContent: 'space-between',
                gap: '20px'
            }}
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

            <Button 
            title="See More"
            sx={{
                alignSelf: 'center'
            }}
            />
        </Stack>
    )
}

export default Products



const Product = ({title, price, image}) => {


    return (
        <MUIButton
        sx={{
            minWidth: 'unset',
            p: 'unset',
            height: '400px',
            display: 'block',
            textTransform: 'unset',
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
        </MUIButton>
    )
}

const Category = ({title, active=false, onClick}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    
    return (
        <MUIButton
        sx={{
            minWidth: 'unset',
            p: 'unset',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            transition: '.7s ease'
        }}
        onClick={onClick}
        >
            <Typography
            sx={{
                textTransform: 'uppercase',
                color: active ?  'primary.main' : 'neutral.800',
                ...sm && {fontSize: '.85rem'}
            }}
            variant="h6"
            >
                {title}
            </Typography>
            <Divider 
            sx={{
                borderWidth: '1px',
                borderColor: active ? 'primary.main' : 'neutral.400',
                width: '120%',
            }}
            />
        </MUIButton>
    )
}