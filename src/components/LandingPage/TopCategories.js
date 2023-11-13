import { Stack, Typography } from "@mui/material"
import { useEffect, useRef } from "react"
import { neutral } from "src/theme/create-palette"
import uuid from "src/utils/uuid"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useBreakpoints } from "src/theme/mediaQuery"

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
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const paddingX = sm ? '20px' : md ? '50px' : xl || lg ? '100px' : '150px'


    return (
        <Stack
        sx={{
            p: `100px ${paddingX}`,
            bgcolor: 'secondary.main',
            gap: '50px'
        }}
        >
        <Typography sx={{textAlign: 'center'}} 
        variant={sm ? 'h4' : md ? 'h3' : "h2"}
        >Top Categories
        </Typography>
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
        <Swiper
        spaceBetween={sm ? 10 : md ? 20 : 30}
        slidesPerView={sm ? 2 : md ? 3 : 4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{width: '100%'}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop
        navigation={{ clickable: true }}
        >
        {
        mockCategories.map( ({image, title, count}) => (
            <SwiperSlide
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
            </SwiperSlide>
        ) )
        }
        </Swiper>
        </Stack>
    )
}

export default TopCategories