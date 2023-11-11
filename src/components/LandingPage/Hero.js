import { Divider, Stack, Typography } from "@mui/material"
import Button from "../Button"



const Hero = () => {



    return (
        <Stack
        direction='row'
        sx={{
            width: '100%',
            height: '430px',
            bgcolor: 'secondary.main',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '50px 150px'
        }}
        >
        <Stack
        sx={{
            width: '48%'
        }}
        >
        <img
        src='/assets/images/23_1030x.webp'
        style={{
            width: 922 / 1.5,
            height: 467 / 1.5,
            objectFit: 'cover'
        }}
        />
        </Stack>
        <Stack>

        </Stack>
        <Stack
        sx={{
            width: '48%',
            textAlign: 'right',
            gap: '20px'
        }}
        >
            <Typography sx={{color: 'primary.main', fontWeight: 600}}>100% genuine Products</Typography>
            <Typography
            variant="h3"
            >
            {`Our Garden's Most Favourite Food`}
            </Typography>
            <Stack
            direction='row'
            sx={{
                gap: '20px',
                height: '50px'
            }}
            >
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            </Typography>
            <Divider 
            sx={{
                borderWidth: '1px',
                borderColor: 'neutral.400',
                height: '100%',
            }}
            />
            </Stack>
            <Stack
            direction='row'
            sx={{
                gap: '15px',
                alignSelf: 'flex-end'
            }}
            >
            <Button 
            title="Explore Products"
            />
            <Button 
            title="Learn More"
            variant="outlined"
            />
            </Stack>
        </Stack>
        </Stack>
    )
}

export default Hero