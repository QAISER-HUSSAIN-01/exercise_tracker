import React from "react";
import ActivityCard from "../../../src/components/cards";
import DashboardLayout from "../../../src/layouts/dashboardLayout/DashboardLayout";
import { url } from "../../../src/utils/url";
import axios from "axios";
import { Box } from "@mui/material";
import Link from 'next/link'

export async function getServerSideProps({req,res}) {
  const token = req.cookies.token;
  console.log('serverside cookies: ', token);
  const response = await axios.get(`${url}api/exercise`,{params:{token:token}});
  const cards = response.data.data || [];
  return {
    props: {
      cards: cards,
    },
  };
}

export default function Activities({cards}) {

  const CardsRender = () => {
    // return cards[0] ? cards.map((item, index) => <Link href={`/dashboard/activities/${item._id}`} key={index}> <ActivityCard card={item} key={index} /> </Link>) : 'No Activities Found Yet';
    return cards[0] ? cards.map((item, index) =>  <ActivityCard card={item} key={index} /> ) : 'No Activities Found Yet';
  };
  return (
    <Box sx={{display:'flex',flexWrap:'wrap', gap:'10px',justifyContent:'center',padding:'20px 0px'}}>
     <CardsRender />
    </Box>
  );
}
Activities.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
