import React from "react";
import ActivityCard from "../../../src/components/cards";
import DashboardLayout from "../../../src/layouts/dashboardLayout/DashboardLayout";
import { url } from "../../../src/utils/url";
import axios from "axios";
import { Box } from "@mui/material";

export async function getServerSideProps() {
  const response = await axios.get(`${url}api/exercise`);
  const cards = response.data.data;
  return {
    props: {
      cards: cards,
    },
  };
}

export default function Activities({ cards }) {
  const CardsRender = () => {
    return cards.map((item, index) => <ActivityCard card={item} key={index} />);
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
