import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
  Badge,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import DrawerCompo from "./DrawerCompo";
import GameLogo from "../assets/81250-game-controler.json";
import Lottie from "lottie-react";
import { Pages } from "../Helpers/Pages";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const wishlist = useSelector((state) => state.wishlist);

  return (
    <>
      <AppBar
        sx={{
          background: "#f2f2f2",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Lottie
              animationData={GameLogo}
              style={{ width: "70px", height: "70px" }}
            />
          </Link>

          {isMatch ? (
            <>
              <Badge
                badgeContent={wishlist.length}
                color="secondary"
                invisible={wishlist.length === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    right: 5,
                    top: 5,
                    padding: "0 4px",
                    height: "14px",
                    minWidth: "13px",
                  },
                }}
              >
                <Link to="/wishlist">
                  <IconButton sx={{ color: "black" }}>
                    <ShoppingBagOutlined />
                  </IconButton>
                </Link>
              </Badge>
              <DrawerCompo />
            </>
          ) : (
            <>
              <Tabs
                textColor="primary"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {Pages.map((label) => (
                  <Tab label={label} />
                ))}
              </Tabs>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <IconButton sx={{ color: "black" }}>
                  <PersonOutline />
                </IconButton>
                <Badge
                  badgeContent={wishlist.length}
                  color="secondary"
                  invisible={wishlist.length === 0}
                  sx={{
                    "& .MuiBadge-badge": {
                      right: 5,
                      top: 5,
                      padding: "0 4px",
                      height: "14px",
                      minWidth: "13px",
                    },
                  }}
                >
                  <Link to="/wishlist">
                    <IconButton sx={{ color: "black" }}>
                      <ShoppingBagOutlined />
                    </IconButton>
                  </Link>
                </Badge>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
