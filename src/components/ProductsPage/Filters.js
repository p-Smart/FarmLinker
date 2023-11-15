import { Checkbox, Button as MUIButton, Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import FilterCard from "./FilterCard"
import { productCategories } from "src/mock-data/products"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useState } from "react"



const Filters = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    const initialFilters = {
        category: '',
        startPrice: '',
        endPrice: ''
    }
    const [filters, setFilters] = useState(initialFilters)

    return (
        <Stack
            sx={{
                gap: '30px'
            }}
            >
            <Typography
            variant="h5"
            >
                Filters
            </Typography>
            <FilterCard 
            title='Category'
            >
            <Stack sx={{gap: '20px'}}>
            {
            productCategories.map( (category) => (
                <MUIButton
                key={category}
                direction='row'
                sx={{gap: '10px', alignItems: 'center', minWidth: 'unset', py: '5px', color: 'neutral.800', alignSelf: 'flex-start'}}
                onClick={() => setFilters( (prevVal) => ({...prevVal, category}) )}
                >
                    <Checkbox
                    checked={filters?.category===category}
                    sx={{width: '10px', height: '10px',}}
                    />
                    <Typography
                    sx={{
                        fontWeight: 500
                    }}
                    >
                    {category}
                    </Typography>
                </MUIButton>
            ) )
            }
            </Stack>
            </FilterCard>

            <FilterCard title='Price'>
            <Stack sx={{gap: '20px'}}>
            <Stack 
            direction='row'
            sx={{gap: '20px', 
            justifyContent: 'space-between',
            '& .MuiInputBase-root': {
                borderRadius: 'unset'
            },
            '& p': {color: 'neutral.400'}
            }}>
            <Stack>
                <Typography>From ₦</Typography>
                <TextField 
                type="number"
                onChange={(e) => setFilters( (prevVal) => ({...prevVal, startPrice: e.target.value}))}
                />
            </Stack>
            <Stack>
                <Typography>To ₦</Typography>
                <TextField 
                type="number"
                onChange={(e) => setFilters( (prevVal) => ({...prevVal, endPrice: e.target.value}))}
                />
            </Stack>
            </Stack>
            <Button
            fullWidth
            title="Filter"
            onClick={() => console.log(filters)}
            />
            </Stack>
            </FilterCard>
            </Stack>
    )
}

export default Filters