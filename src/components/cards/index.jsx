import { Divider, Typography } from '@mui/material'
import React from 'react'
import {CardContainer, CardHeader, CardCaption, CardBody, CardDate } from './styledCard';
export default function ActivityCard({card}) {
    return (
            <CardContainer>
                <CardHeader>
                    <Typography variant='h5'>{card.name}</Typography>
                    <Typography variant='h5'>{card.duration}min</Typography>
                </CardHeader>
                <CardCaption>
                    <Typography variant='body1' color={'text.secondary'}>Type</Typography>
                    <Typography variant='body1' sx={{ border: '1px solid lightgrey', padding: '2px 5px', borderRadius: '5px', backgroundColor: '#f4f4f4' }}>{card.activityType}</Typography>
                </CardCaption>
                <Divider />
                <CardBody variant='body1'>
                {card.description}
                    </CardBody>
                <CardDate variant='body2' color={'text.secondary'}>{card.date}</CardDate>
        </CardContainer>
        
    )
}
