import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const pages = [{ name: "Home", route: "/" }];

export default function Header() {
  return (
    <AppBar position="static" elevation={0} color="inherit">
      <Toolbar>
        <FavoriteRoundedIcon
          sx={(theme) => ({
            mr: 1,
            color: theme.palette.primary.main,
          })}
        />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            fontWeight: "900",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ACME
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {pages.map((page) => (
            <Button size="large" key={page.name} color="inherit">
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
