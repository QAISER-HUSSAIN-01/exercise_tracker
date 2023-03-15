import { Box, Button } from "@mui/material";
import React from "react";
import { BannerBox, Heading, Text, BannerButton } from "./styledBanner";
import styles from "./Banner.module.css";
import { useRouter } from "next/router";
import banner from "../../../public/banner6.png";
import Image from "next/image";
import {getCookie} from 'cookies-next'

export default function Banner() {
  const router = useRouter();
  const token = getCookie('token');
  const gotoDashboard = () => {
    router.push("/dashboard");
  };
  const gotoSignin = () => {
    router.push("/signin");
  };
  return (
    <BannerBox>
      <Box className={styles.bgimg}>
        <Image className={styles.img} src={banner} alt={"banner image"} height={600} width={600} />
      </Box>
      <Heading>
        Track Your <span style={{ float: "right" }}> Activity </span>
      </Heading>
      <Text>Get your achievements and let us keep you on track</Text>
      <BannerButton>
        <Button
          className={styles.getstarted}
          variant="contained"
          color="warning"
          onClick={token ? gotoDashboard : gotoSignin}
        >
          Get Started
        </Button>
      </BannerButton>
    </BannerBox>
  );
}
