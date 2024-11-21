import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Coindetails from "./Pages/CoinDetails/Coindetails";

const App = () => {
  const [selectData, setSelectData] = useState("usd");
  return (
    <div className="main-app">
      <Navbar setFunction={setSelectData} />
      <Routes>
        <Route path="/" element={<Home cdata={selectData} />} />
        <Route path="/coin/:id" element={<Coindetails cdata={selectData} />} />
      </Routes>
    </div>
  );
};

export default App;
