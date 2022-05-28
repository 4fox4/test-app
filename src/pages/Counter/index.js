import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CounterPage() {
  return (
    <Box px={3}>
      <Typography
        variant="h3"
        noWrap
        sx={{
          mr: 2,
          fontWeight: "900",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Counter page
      </Typography>
    </Box>
  );
}
