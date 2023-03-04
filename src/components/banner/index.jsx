import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { BannerBox, Heading, Text, BannerButton } from './styledBanner'
import styles from './Banner.module.css'
import { useRouter } from 'next/router'
import banner from '../../../public/banner6.png'
import Image from 'next/image'

export default function Banner() {
    const router = useRouter();
    const gotoDashboard = () => { router.push('/dashboard') }
    const gotoSignin = () => { router.push('/dashboard') }
    const gotoSignup = () => { router.push('/dashboard') }
    return (
        <BannerBox>
            <Image className={styles.bgimg} src={banner} alt={'banner image'} />
            <Heading>Track Your <span style={{ float: 'right' }}> Activity </span></Heading>
            <Text>Get your achievements and let us keep you on track</Text>
            <BannerButton>
                <Button className={styles.getstarted} variant='contained' color='warning' onClick={gotoDashboard}>Get Started</Button>
            </BannerButton>
        </BannerBox>
    )
}
