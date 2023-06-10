import React from "react";
import LoadingAnimation from "../assets/97930-loading.json";
import Lottie from "lottie-react";
import { Box } from "@mui/material";
const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Lottie animationData={LoadingAnimation} />
    </Box>
  );
};

export default Loading;
