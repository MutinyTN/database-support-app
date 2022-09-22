import react, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import IconButton from "@mui/material/IconButton";
import SidebarItem from "./SidebarItem";
import styles from "./SidebarMenu.module.css";
import Typography from "@mui/material/Typography";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label="open drawer"
        onClick={handleMenuOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuSharpIcon />
      </IconButton>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleMenuClose}
      >
        <ul className={styles.list}>
          <Typography>
            <SidebarItem link="/" name="Home" />
            <SidebarItem link="/about" name="About Us" />
          </Typography>
        </ul>
      </Drawer>
    </>
  );
}
