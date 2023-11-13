import { Stack, Typography } from "@mui/material"
import Button from "../Button"



const TalkToConsultant = () => {


    return (
        <Stack
        direction='row'
        sx={{
            width: '100%',
            height: '430px',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundImage: 'url(/assets/images/6_6a5c3c7a-6510-4c1d-a349-6ef56203d13d.webp)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}
        >
        <img 
        src="/assets/images/12_9006c4fb-de97-4ab1-90eb-90efae555f0c_570x.png"
        style={{
            height: '100%',
            width: '30%',
            objectFit: 'contain'
        }}
        />

        <Stack
        sx={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
        }}
        >
            <Typography 
            sx={{textTransform: 'uppercase', color: 'primary.main'}}
            variant="h6"
            >
            Are you a Farmer?
            </Typography>
            <Typography
            variant="h4"
            sx={{
                color: 'neutral.50',
                textTransform: 'uppercase',
                textAlign: 'center'
            }}
            >
            Want to  talk to a Consultant?
            </Typography>

            <Stack
            direction='row'
            sx={{
                gap: '15px',
                alignSelf: 'flex-end'
            }}
            >
            <Button
            title="Create Farmer account"
            sx={{textTransform: 'uppercase'}}
            />
            <Button 
            title="Learn More"
            variant="outlined"
            sx={{
                color: 'neutral.50',
                borderColor: 'neutral.50'
            }}
            />
            </Stack>
            <Stack>

            </Stack>
        </Stack>

        <img 
        src="/assets/images/woman-running-small-business.png"
        style={{
            height: '100%',
            width: '30%',
            objectFit: 'cover'
        }}
        />
        </Stack>
    )
}

export default TalkToConsultant