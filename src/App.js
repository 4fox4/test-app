import React from "react";

import { Box } from "@mui/material";

import Header from "./layout/Header";

import HomePage from "./pages/Home";
import CounterPage from "./pages/Counter";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Box px={3}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
