import React from "react";

import { useTheme, Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import HeroAnimation from "../assets/75379-lebleby-games-demo-animation.json";

const HeroCompo = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ maxWidth: "700px", maxHeight: "700px", marginTop: "30px" }}>
          <Lottie animationData={HeroAnimation} />
          {/* <Box textAlign={"center"}> */}
          {/* <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: theme.palette.secondary.main }}
            >
              Introducing the World of Legends!
            </Typography> */}
          {/* <Typography variant="h4" textAlign={"justify"} mt={3} mb={10}>
              Unleash your gaming prowess and embark on an epic adventure in the
              immersive realm of World of Legends. Immerse yourself in
              breathtaking landscapes, fierce battles, and captivating
              storytelling that will keep you on the edge of your seat.
            </Typography> */}
          {/* </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default HeroCompo;
