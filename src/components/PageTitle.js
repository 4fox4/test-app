import * as React from "react";

import Typography from "@mui/material/Typography";

export default function PageTitle({ children }) {
  return (
    <Typography
      variant="h4"
      noWrap
      mb={4}
      sx={{
        fontWeight: "900",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {children}
    </Typography>
  );
}
