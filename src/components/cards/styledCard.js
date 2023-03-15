import { styled, Box, Typography, Card } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  position:'relative',
  width: "20%",
  minWidth: "300px",
  maxHeight: "350px",
  // minHeight: "350px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  borderRadius:'10px',
  ":hover": { boxShadow: "2px 2px 5px black" },
//   [theme.breakpoints.down("md")]: {
//     width: "25%",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "20%",
//   },
//   [theme.breakpoints.down("xs")]: {
//     width: "100%",
//   },
}));

export const Actions = styled(Box)(({ theme }) => ({
  // position:'absolute',
  // top:'-3px',
  // left:8,
  // zIndex:'999'
}));


export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop:'10px'
}));

export const CardCaption = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CardBody = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
}));

export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems:'center',
}));

export const CardDate = styled(Typography)(({ theme }) => ({
  textAlign: "end",
}));


export const DetailContainer = styled(Box)(({ theme }) => ({
  position:'relative',
  width: "100%",
  height:'80vh',
  minWidth: "300px",
  padding: "20px",
  display: "flex",
  justifyContent:'center'
}));

export const CardDetail = styled(Box)(({ theme }) => ({
  width:'30rem',
  height:'max-content',
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  boxShadow: "2px 2px 5px gray",
  borderRadius:'10px'
}));
