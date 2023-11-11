import { Box, Stack } from "@mui/material"
import Circle from "./icons/Circle"
import XMark from "./icons/Xmark"
import Button from "./Button"


const CancelButton = ({onClick, sx}) => {

    return (
        <Button
        variant="outlined"
        sx={{
            position: 'relative',
            width: 'fit-content',
            ...sx
        }}
        onClick={onClick}
        >
        <Circle />
        <Box
        sx={{
            position: 'absolute',
            top: '18%',
            left: '41.5%'
        }}
        >
            <XMark />
        </Box>
        </Button>
    )
}

export default CancelButton