import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Chocolate from "./chocolate";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/chocolate" element={<Chocolate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
