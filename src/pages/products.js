import { Box, Button, Button as MUIButton, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import CheckBox from "src/components/CheckBox"
import Grid from "src/components/CustomGrid"
import PageHeading from "src/components/PageHeading"
import Product from "src/components/Product"
import FilterCard from "src/components/ProductsPage/FilterCard"
import Filters from "src/components/ProductsPage/Filters"
import LandingPageLayout from "src/components/layouts/LandingPageLayout"
import { productCategories, products } from "src/mock-data/products"
import { useBreakpoints } from "src/theme/mediaQuery"
import uuid from "src/utils/uuid"



const ProductsPage = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'


    return (
        <LandingPageLayout>
            <PageHeading 
            title='Commodities'
            />
            <Stack
            direction={md ? 'column' : 'row'}
            sx={{
                p: `50px ${paddingX}`,
                gap: '30px'
            }}
            >
            <Filters />
            <Stack
            sx={{gap: '50px'}}
            >
                <Typography
                sx={{
                    fontWeight: 600,
                    alignSelf: 'flex-end'
                }}
                >
                {`Showing 1-${products?.length} of ${products?.length} result`}
                </Typography>
                
                <Grid
                columns={sm ? 2 : 3}
                sx={{
                    gap: '30px'
                }}
                gridWrapSx={{
                    gap: '20px'
                }}
                >
                {
                products.map( ({title, price, image}) => (
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
            </Stack>
        </LandingPageLayout>
    )
}

export default ProductsPage