import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

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
          variant="h5"
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
      </Toolbar>
    </AppBar>
  );
}
