import Head from 'next/head';
import Banner from '../src/components/banner';
// import HeroSection from '../src/components/herosection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Exercise Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      {/* <HeroSection /> */}
    </>
  )
}
