import { Box, Typography } from "@mui/material";

export default function Count({ count }) {
  return (
    <Box>
      <Typography variant="h2" noWrap sx={{ fontWeight: "900" }}>
        {count}
      </Typography>
    </Box>
  );
}
