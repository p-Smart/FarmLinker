import { Divider, Button as MUIButton, Stack, Typography } from "@mui/material"
import Grid from "../CustomGrid"
import uuid from "src/utils/uuid"
import Button from "../Button"
import { useState } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"
import { productCategories, products } from "src/mock-data/products"
import { useRouter } from "next/router"



const Products = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'
    const router = useRouter()

    const [activeCategory, setActiveCategory] = useState('Fruits')


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
            productCategories.map( (category) => (
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
            products.filter(product => product.category === activeCategory).map(({title, price, image}) => (
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
            onClick={ () => router.push('/products') }
            />
        </Stack>
    )
}

export default Products



export const Product = ({title, price, image}) => {


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