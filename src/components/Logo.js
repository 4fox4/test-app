import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export default function Logo({ color }) {
  return (
    <Box display="flex" alignItems="center">
      <FavoriteRoundedIcon
        sx={(theme) => ({
          mr: 1,
          color: color ?? theme.palette.primary.main,
        })}
      />
      <Typography
        variant="h6"
        noWrap
        sx={{
          fontWeight: "900",
          color: color ?? "inherit",
          textDecoration: "none",
        }}
      >
        ACME
      </Typography>
    </Box>
  );
}
