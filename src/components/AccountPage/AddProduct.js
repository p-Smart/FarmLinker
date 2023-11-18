import { Alert, Box, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useAccountContext } from "src/contexts/accountContext"
import {IoClose} from 'react-icons/io5'
import Button from "../Button"
import { AiOutlineFileAdd } from "react-icons/ai"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useState } from "react"
import { productCategories } from "src/mock-data/products"
import { DropzoneArea } from "react-mui-dropzone"
import { fetchData, getUserId } from "src/utils/fetchData"
import toast from 'react-hot-toast'



const AddProduct = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    const {openAddProduct, setOpenAddProduct} = useAccountContext()
    const [loading, setLoading] = useState(false)
    const initialProductData = {
        productName: '',
        description: '',
        category: '',
        price: '',
        availQuantity: '',
        images: [],
    }
    const [productData, setProductData] = useState(initialProductData)


    const form = [
        {
            label: 'Product Name',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, productName: e.target.value}) ),
        },
        {
            label: 'Description',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, description: e.target.value}) ),
            multiline: {rows: 3}
        },
        {
            label: 'Category',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, category: e.target.value}) ),
            select: productCategories
        },
        {
            label: 'Price (N)',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, price: e.target.value}) ),
            type: 'number'
        },
        {
            label: 'Available Qualtity',
            type: 'number',
            onChange: (e) => setProductData( (prevValue) => ({...prevValue, availQuantity: e.target.value}) ),
        },
        
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const {message} = await fetchData({
                endpoint: '/add-product',
                useFormData: true,
                payload: {
                    ...productData
                },
            })
            
            toast.success(message)
            // setOpenAddProduct(false)
        }
        catch(err){
            toast.error(err.message)
        }
        finally{
            setLoading(false)
        }
    }


    return (
        <Dialog
        open={openAddProduct}
        // onClose={() => setOpenAddProduct(false)}
        sx={{
            '& .MuiPaper-root': {
                width: sm ? '100%' : md ? '75%' : lg ? '60%' : xl ? '45%' : '40%'
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
            variant="h5"
            >
            Add New Product
            <IoClose size={30} 
            onClick={() => setOpenAddProduct(false)} 
            style={{cursor: 'pointer'}} />
            </DialogTitle>
            <DialogContent sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <Stack sx={{gap: '10px', mt: '10px'}}>
            {
            form.map ( ({label, onChange, type, select, multiline}) => (
                <>
                {
                !select ?
                <Box sx={{width: '100%'}}
                key={label}
                >
                <TextField
                fullWidth
                label={label}
                type={type || 'text'}
                onChange={onChange}
                {...multiline && { multiline: true, rows: multiline?.rows }}
                />
                </Box> :
                <Box sx={{width: '100%'}}
                key={label}
                >
                <Typography sx={{fontWeight: 300, color: 'neutral.600'}}>{label}</Typography>
                <Select
                label={label}
                onChange={onChange}
                sx={{width: '100%', mt: '5px'}}
                >
                {
                    select.map( (category) => (
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

            <Stack
            sx={{
                '& .MuiDropzoneArea-textContainer p': {
                    fontSize: '1.2rem'
                }
            }}
            >
            <Typography sx={{fontWeight: 300, color: 'neutral.600'}}>
                Product Image
            </Typography>
            <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop image here or click"}
            onChange={(files) => setProductData( (prevValue) => ({...prevValue, images: files}) )}
            filesLimit={3}
            getFileLimitExceedMessage={(limit) => `Maximum number of images exceeded (${limit})`}
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
            loading={loading}
            />
            </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddProduct