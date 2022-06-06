import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Logo from "../components/Logo";

const pages = [
  { name: "Home", route: "/" },
  { name: "Counter", route: "/counter" },
];

export default function Header() {
  const location = useLocation();
  return (
    <AppBar position="static" elevation={0} color="inherit">
      <Toolbar>
        <Logo />
        <Box ml={2} sx={{ flexGrow: 1, display: "flex" }}>
          {pages.map((page) => (
            <Button
              LinkComponent={Link}
              to={page.route}
              size="large"
              key={page.name}
              color={page.route === location.pathname ? "primary" : "inherit"}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
