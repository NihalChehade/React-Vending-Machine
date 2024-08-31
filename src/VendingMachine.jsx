import React from "react";
import Soda from "./Soda";
import Chips from "./Chips";
import Chocolate from "./chocolate";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div>
      <div>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</div>
      <ul>
        <li><Link to='/chips'>Chips</Link></li>
        <li><Link to='/soda'>Soda</Link></li>
        <li><Link to='/chocolate'>Chocolate</Link></li>
      </ul>
    </div>
  );
};

export default VendingMachine;
