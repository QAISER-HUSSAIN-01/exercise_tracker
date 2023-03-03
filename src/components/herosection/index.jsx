import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import activities from '../../../public/activities.jpg'
import { Heading, HeroWrapper, HeroButton, Text, Left, Right } from './styledHero'
export default function HeroSection() {
  return (
    <HeroWrapper>

      <Left>
        <Image src={activities} />
      </Left>

      <Right>
        <Heading>Measure Your <br /> <span>Performance</span></Heading>
        <Text>
          Tracking the consistency of your runs and workouts allow you to gain and better understanding of your goals
        </Text>
        <HeroButton>
          <Button variant='contained' color='warning' size='small'>Check My Activities</Button>
        </HeroButton>
      </Right>

    </HeroWrapper>
  )
}
