import { Alert, Box, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useAccountContext } from "src/contexts/accountContext"
import {IoClose} from 'react-icons/io5'
import Button from "../Button"
import { AiOutlineFileAdd } from "react-icons/ai"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useState } from "react"
import { productCategories } from "src/mock-data/products"
import { DropzoneArea } from "react-mui-dropzone"



const AddProduct = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    const {openAddProduct, setOpenAddProduct} = useAccountContext()
    const initialProductData = useState({
        productName: '',
        description: '',
        category: '',
        price: '',
        availQuantity: ''
    })
    const [productData, setProductData] = useState(initialProductData)


    const form = [
        {
            label: 'Product Name',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, productName: e.target.value}) ),
        },
        {
            label: 'Description',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, productName: e.target.value}) ),
        },
        {
            label: 'Category',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, productName: e.target.value}) ),
            select: productCategories
        },
        {
            label: 'Price (N)',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, productName: e.target.value}) ),
            type: 'number'
        },
        {
            label: 'Available Qualtity',
            type: 'number',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, productName: e.target.value}) ),
        },
        
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <Dialog
        open={openAddProduct}
        onClose={() => setOpenAddProduct(false)}
        sx={{
            '& .MuiPaper-root': {
                bgcolor: 'neutral.50',
                width: xs ? '95%' : sm ? '70%' : md ? '55%' : lg ? '40%' : xl ? '35%' : '30%'
            }
        }}
        >
        <form
        noValidate
        onSubmit={handleSubmit}
        >
            <DialogTitle
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
            >
            <Typography variant="h5">
            Add New Product
            </Typography>
            <IoClose size={30} 
            onClick={() => setOpenAddProduct(false)} 
            style={{cursor: 'pointer'}} />
            </DialogTitle>
            <DialogContent sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>

            {/* {
            errorMessage &&
            <Alert
            severity="error"
            >
            <Typography>{errorMessage}</Typography>
            </Alert>
            } */}
            
            <Stack sx={{gap: '10px', mt: '10px'}}>
            {
            form.map ( ({label, onChange, type, select}) => (
                <>
                {
                !select ?
                <Box sx={{width: '100%'}}>
                <TextField
                fullWidth
                key={label}
                label={label}
                type={type || 'text'}
                onChange={onChange}
                />
                </Box> :
                <Box sx={{width: '100%'}}>
                <Typography sx={{fontWeight: 300, color: 'neutral.600'}}>{label}</Typography>
                <Select
                label={label}
                onChange={onChange}
                sx={{width: '100%', mt: '5px'}}
                >
                {
                    select.map( ({category}) => (
                        <MenuItem
                        key={category}
                        value={category}
                        >
                        {category}
                        </MenuItem>
                    ) )
                }
                </Select>
                </Box>
                }
                </>
            ) )
            }

            <Stack>
            <Typography sx={{fontWeight: 300, color: 'neutral.600'}}>
                Product Image
            </Typography>
            <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop image here or click"}
            onChange={(files) => console.log('Files:', files)}
            
            />
            </Stack>
            </Stack>
            </DialogContent>
            <DialogActions>
            <Button
            title='Submit Product'
            Icon={AiOutlineFileAdd}
            IconPlacement="left"
            squareCorners
            fullWidth
            sx={{gap: '5px'}}
            type='submit'
            />
            </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddProduct