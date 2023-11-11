import { Box, Divider, Stack, Typography } from "@mui/material"



const AboutUs = () => {


    return (
        <Stack
        direction='row'
        sx={{
            p: '100px 150px',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        >
        <Stack
        direction='row'
        sx={{
            width: '570px',
            height: '531px',
            gap: '30px',
        }}
        >
        <Box
        sx={{
            width: '50%',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '90%'
        }}
        >
        <img src="/assets/images/watering-plant.jpg" 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        </Box>
        <Box
        sx={{
            width: '50%',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '90%',
            mt: 'auto',
            position: 'relative'
        }}
        >
        <img src="/assets/images/main-in-farm.jpg" 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <Box
        sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            p: '15px',
            bgcolor: 'neutral.50',
        }}
        >
            <Stack
            sx={{alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', p: '35px 10px', color: 'neutral.50'}}
            >
                <Stack direction='row'><Typography variant="h4">5</Typography><Typography sx={{mt: 'auto'}}>+</Typography></Stack>
                <Typography variant='h6'>Years Experience</Typography>
            </Stack>
        </Box>
        </Box>
        </Stack>
        
        <Stack
        sx={{
            width: '48%',
            gap: '20px'
        }}
        >
            <Typography sx={{color: 'primary.main', fontWeight: 600}}>
            KNOW MORE ABOUT FARMLINKER
            </Typography>
            <Typography
            variant="h2"
            >
            {`Trusted Farm Product Marketplace`}
            </Typography>
            <Stack
            direction='row'
            sx={{
                gap: '20px',
                height: '50px'
            }}
            >
            <Divider
            sx={{
                borderWidth: '1px',
                borderColor: 'neutral.400',
                height: '100%',
            }}
            />
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            </Stack>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ at.
            </Typography>
        </Stack>
        </Stack>
    )
}


export default AboutUs