import React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";

import Count from "../components/Count";
import PageTitle from "../components/PageTitle";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

export default function CounterPage() {
  return (
    <Box>
      <PageTitle>Counter page</PageTitle>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <Fab size="small" sx={{ boxShadow: "none" }}>
          <RemoveRoundedIcon />
        </Fab>
        <Box px={4}>
          <Count count={0} />
        </Box>
        <Fab size="small" sx={{ boxShadow: "none" }}>
          <AddRoundedIcon />
        </Fab>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField size="small" label="Texte" />
      </Box>
    </Box>
  );
}
