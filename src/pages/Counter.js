import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component did mount 🔥 !");
  }, []);

  useEffect(() => {
    console.log("Counter change 🧯 !");
  }, [counter]);

  const incrementer = () => {
    setCounter(counter + 1);
  };
  const decrementer = () => {
    setCounter(counter - 1);
  };
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
      <Button onClick={decrementer}>Minus</Button>
      {counter}
      <Button onClick={incrementer}>Plus</Button>
      {/* <Button title="Plus"></Button> */}
    </Box>
  );
}
