import { Stack, Typography } from "@mui/material"
import { useEffect, useRef } from "react"
import { neutral } from "src/theme/create-palette"
import uuid from "src/utils/uuid"

const mockCategories = [
    {
        title: 'Vegetables',
        image: '/assets/images/vegetables.avif',
        count: '24'
    },
    {
        title: 'Fruits',
        image: '/assets/images/fruits.avif',
        count: '18'
    },
    {
        title: 'Food & Drinks',
        image: '/assets/images/foodndrinks.avif',
        count: '37'
    },
    {
        title: 'Dried Foods',
        image: '/assets/images/driedfoods.avif',
        count: '52'
    },
    {
        title: 'Vegetables',
        image: '/assets/images/vegetables.avif',
        count: '24'
    },
    {
        title: 'Fruits',
        image: '/assets/images/fruits.avif',
        count: '18'
    },
    {
        title: 'Food & Drinks',
        image: '/assets/images/foodndrinks.avif',
        count: '37'
    },
    {
        title: 'Dried Foods',
        image: '/assets/images/driedfoods.avif',
        count: '52'
    },
]



const TopCategories = () => {

    const swiperElRef = useRef(null)

    useEffect(() => {
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
          const [swiper, progress] = e.detail
          console.log(progress)
        })
    
        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
          console.log('slide changed')
        });
    }, [])


    return (
        <Stack
        sx={{
            p: '100px 150px',
            bgcolor: 'secondary.main',
            gap: '50px'
        }}
        >
        <Typography sx={{textAlign: 'center'}} variant="h2">Top Categories</Typography>
        {/* <Stack
        direction='row'
        sx={{
            gap: '30px',
            '& p': {
                fontWeight: 600
            }
        }}
        >
        {
        mockCategories.map( ({image, title, count}) => (
            <Stack
            key={uuid()}
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '25%',
                gap: '10px',
                p: '40px',
                bgcolor: 'neutral.50',
                boxShadow: '0 0 10px rgb(0,0,0,.125)'
            }}
            >
            <img 
            src={image}
            />
            <Typography>{title}</Typography>
            <Typography>({count}items)</Typography>
            </Stack>
        ) )
        }
        </Stack> */}


        <swiper-container
        ref={swiperElRef}
        slides-per-view="4"
        space-between="30px"
        navigation="true"
        pagination="true"
        css-mode="true"
        style={{
            
        }}
        >
        {
        mockCategories.map( ({image, title, count}) => (
            <swiper-slide
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '25%',
                gap: '10px',
                padding: '40px',
                backgroundColor: neutral[50],
                boxShadow: '0 0 10px rgb(0,0,0,.125)'
            }}
            key={uuid()}
            >
            <img 
            src={image}
            />
            <Typography sx={{fontWeight: 600}}>{title}</Typography>
            <Typography sx={{fontWeight: 600}}>({count}items)</Typography>
            </swiper-slide>
        ) )
        }
        </swiper-container>
        </Stack>
    )
}

export default TopCategories