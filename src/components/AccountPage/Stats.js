import { Stack, Typography } from "@mui/material"
import Grid from "../CustomGrid"
import StatCard from "./StatCard"
import { MdDeliveryDining, MdEventAvailable, MdProductionQuantityLimits, MdReviews, MdSell } from "react-icons/md"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { useBreakpoints } from "src/theme/mediaQuery"
import uuid from "src/utils/uuid"
import { useEffect, useRef } from "react"



const stats = [
    {
        title: 'Commodities',
        Icon: MdProductionQuantityLimits,
        IconColor: 'primary.main',
        value: 75
    },
    {
        title: 'Total Sold',
        Icon: MdSell,
        IconColor: ' #3498db',
        value: 55
    },
    {
        title: 'Total Unsold',
        Icon: MdEventAvailable,
        IconColor: '#27ae60',
        value: 75-55
    },
    {
        title: 'Total Revenue',
        Icon: FaMoneyCheckAlt,
        IconColor: '#f39c12',
        value: '₦ 325,658.00'
    },
    {
        title: 'Pending Deliveries',
        Icon: MdDeliveryDining,
        IconColor: '#e74c3c',
        value: 11
    },
    {
        title: 'Total Commodity Reviews',
        Icon: MdReviews,
        IconColor: '#8e44ad',
        value: 98
    },
]



const Stats = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const statsRef = useRef(null)

    useEffect( () => {
        if(statsRef.current){
            statsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [] )


    return (
        <Stack 
        ref={statsRef}
        sx={{gap: '20px'}}>
        <Typography
        variant={sm ? 'h5' : lg ? "h4" : "h3"}
        >
            Overview
        </Typography>
        <Grid
        columns={sm ? 1 : md ? 2 : 4}
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
        stats.map( ({title, Icon, IconColor, value}, k) => (
            <StatCard
            key={uuid()}
            title={title}
            Icon={Icon}
            IconColor={IconColor}
            value={value}
            />
        ) )
        }
        </Grid>
        </Stack>
    )
}


export default Stats