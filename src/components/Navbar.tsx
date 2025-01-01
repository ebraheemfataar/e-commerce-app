import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <Toolbar>
        {matches && (
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          E-Commerce
        </Typography>
        {!matches && (
          <nav>
            <Link
              to="/"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Home
            </Link>
            <Link
              to="/product/1"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Product 1
            </Link>
          </nav>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
