import React from "react";

import Header from "./layout/Header";

import HomePage from "./pages/Home";
import CounterPage from "./pages/Counter";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/counter" element={<CounterPage />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
