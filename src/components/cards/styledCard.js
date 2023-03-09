import { styled, Box, Typography, Card } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  width: "20%",
  minWidth: "300px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
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

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CardCaption = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CardBody = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
}));

export const CardDate = styled(Typography)(({ theme }) => ({
  textAlign: "end",
}));
