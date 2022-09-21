import react, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import IconButton from "@mui/material/IconButton";
import NavbarItem from "./NavbarItem";

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
        color="inherit"
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
            width: "200px",
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleMenuClose}
      >
        <ul>
          <NavbarItem link="/" name="Home"></NavbarItem>
          <NavbarItem link="/about" name="About Us" />
        </ul>
      </Drawer>
    </>
  );
}
