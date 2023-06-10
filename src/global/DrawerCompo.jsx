import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { useSelector } from "react-redux";
const DrawerCompo = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <Drawer
        PaperProps={{
          style: { width: 300 }, // Set the desired width of the drawer
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        p={10}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <Link to="/wishlist">
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Wish List ({wishlist.length}) </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Services </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Products </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: "auto" }}
      >
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerCompo;
