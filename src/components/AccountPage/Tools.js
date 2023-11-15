import { Stack, Typography } from "@mui/material"
import Button from "../Button"
import uuid from "src/utils/uuid"
import { useBreakpoints } from "src/theme/mediaQuery"
import Grid from "../CustomGrid"



const Tools = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    const tools = [
        {
            title: 'Add New Product',
            Icon: 'https://img.icons8.com/color/48/add-product.png',
            action: null
        },
        {
            title: 'View All Your Products',
            Icon: 'https://img.icons8.com/3d-fluency/94/view.png',
            action: null
        },
        {
            title: 'Manage Inventory',
            Icon: 'https://img.icons8.com/nolan/64/in-inventory.png',
            action: null
        },
        {
            title: 'Consultation Request',
            Icon: 'https://img.icons8.com/color/48/consultation.png',
            action: null
        },
    ]

    return (
        <Stack sx={{gap: '20px'}}>
        <Typography
        variant={sm ? 'h5' : lg ? "h4" : "h3"}
        >
            Tools
        </Typography>

        <Grid
        columns={sm ? 1 : md ? 2 : xl ? 3 : 4}
        sx={{
            gap: '30px',
            justifyContent: 'space-between',
        }}
        gridWrapSx={{
            justifyContent: 'space-between',
            gap: '20px'
        }}
        >
        {
        tools.map( ({title, action, Icon}) => (
            <Button
            key={uuid()}
            variant="text"
            sx={{
                alignSelf: 'flex-start',
                border: 'none',
                p: '5px 10px',
                borderRadius: '10px'
            }}
            onClick={() => action && action()}
            >
            <img 
            width="50"
            height="50"
            src={Icon}
            />
            <Typography 
            variant="h6"
            >
            {title}
            </Typography>
            </Button>
        ) )
        }
        </Grid>
        </Stack>
    )
}

export default Tools