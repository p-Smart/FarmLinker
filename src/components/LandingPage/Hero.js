import { Divider, Stack, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useRouter } from "next/router"



const Hero = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'
    const router = useRouter()


    return (
        <Stack
        direction={md ? 'column-reverse' : 'row'}
        sx={{
            width: '100%',
            height: md ? 'fit-content' : '430px',
            bgcolor: 'secondary.main',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: `50px ${paddingX}`,
            ...md && {gap: '20px'}
        }}
        >
        <Stack
        sx={{
            width: md ? '100%' : '48%',
            ...md && {alignItems: 'center'}
        }}
        >
        <img
        src='/assets/images/23_1030x.webp'
        style={{
            width: sm ? 922 / 2.3 : lg ? 922 / 2 : xl ? 922 / 1.7 : 922 / 1.5,
            height: sm ? 467 / 2.3 : lg ? 467 / 2 : xl ? 467 / 1.7 : 467 / 1.5,
            objectFit: 'cover'
        }}
        />
        </Stack>
        <Stack>

        </Stack>
        <Stack
        sx={{
            width: md ? '100%' : '48%',
            textAlign: md ? 'left' : 'right',
            gap: '20px'
        }}
        >
            <Typography sx={{color: 'primary.main', fontWeight: 600}}>100% genuine Products</Typography>
            <Typography
            variant={sm ? 'h5' : lg ? "h4" : "h3"}
            >
            {`Agric Booking N Consultancy`}
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
                alignSelf: md ? 'flex-start' : 'flex-end',
                '& button': {
                    p: '8px 16px',
                },
                ...sm && {mt: '20px'}
            }}
            >
            <Button 
            title="Explore Products"
            onClick={() => router.push('/products')}
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