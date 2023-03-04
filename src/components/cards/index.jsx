import { Divider, Typography } from '@mui/material'
import React from 'react'
import {CardContainer, CardHeader, CardCaption, CardBody, CardDate } from './styledCard';
export default function ActivityCard() {
    return (
        <CardContainer>
                <CardHeader>
                    <Typography variant='h5'>Name</Typography>
                    <Typography variant='h5'>30min</Typography>
                </CardHeader>
                <CardCaption>
                    <Typography variant='body1' color={'text.secondary'}>Type</Typography>
                    <Typography variant='body1' sx={{ border: '1px solid lightgrey', padding: '2px 5px', borderRadius: '5px', backgroundColor: '#f4f4f4' }}>swimming</Typography>
                </CardCaption>
                <Divider />
                <CardBody variant='body1'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardBody>
                <CardDate variant='body2' color={'text.secondary'}>Yesterday 02/2023</CardDate>
        </CardContainer>
    )
}
