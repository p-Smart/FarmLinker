import { Alert, Box, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useAccountContext } from "src/contexts/accountContext"
import {IoClose} from 'react-icons/io5'
import Button from "../Button"
import { AiOutlineFileAdd } from "react-icons/ai"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useState } from "react"
import { productCategories } from "src/mock-data/products"
import { specializations } from "../RegisterPage/register-data"
import toast from 'react-hot-toast'
import { fetchData } from "src/utils/fetchData"



const ConsultationRequest = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const [loading, setLoading] = useState(false)


    const {openConsultationRequest, setOpenConsultationRequest} = useAccountContext()
    const initialConsultReqData = {
        title: '',
        description: '',
        specialization: '',
    }
    const [consultReqData, setConsultReqData] = useState(initialConsultReqData)


    const form = [
        {
            label: 'Title',
            onChange: (e) => setConsultReqData( (prevValue) => ({...prevValue, title: e.target.value}) ),
        },
        {
            label: 'Brief Description',
            onChange: (e) => setConsultReqData( (prevValue) => ({...prevValue, description: e.target.value}) ),
            multiline: {rows: 3}
        },
        {
            label: 'Specialization Field',
            onChange: (e) => setConsultReqData( (prevValue) => ({...prevValue, specialization: e.target.value}) ),
            select: specializations
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {message, data} = await fetchData({
                endpoint: '/request-consultancy',
                payload: consultReqData
            })
            toast.success(message, {duration: 5000})
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
        open={openConsultationRequest}
        // onClose={() => setOpenConsultationRequest(false)}
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
            Request Consultation
            <IoClose size={30} 
            onClick={() => setOpenConsultationRequest(false)} 
            style={{cursor: 'pointer'}} />
            </DialogTitle>
            <DialogContent sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <Typography
            sx={{alignSelf: 'center'}}
            >
                Request consultation from our skilled experts in diverse fields.
            </Typography>
            
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
                    select.map( ({label, id}) => (
                        <MenuItem
                        key={id}
                        value={id}
                        >
                        {label}
                        </MenuItem>
                    ) )
                }
                </Select>
                </Box>
                }
                </>
            ) )
            }
            </Stack>
            </DialogContent>
            <DialogActions>
            <Button
            title='Submit'
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

export default ConsultationRequest