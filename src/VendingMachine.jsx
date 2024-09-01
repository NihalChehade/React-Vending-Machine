import React from "react";
import Soda from "./Soda";
import Chips from "./Chips";
import Chocolate from "./chocolate";
import { Link } from "react-router-dom";
import "./VendingMachine.css"
const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <div className="left-part">HELLO I AM A VENDING MACHINE.
         WHAT WOULD YOU LIKE TO EAT?</div>
      
      <ul className="right-part">
        <li><Link to='/chips'>Chips</Link></li>
        <li><Link to='/soda'>Soda</Link></li>
        <li><Link to='/chocolate'>Chocolate</Link></li>
      </ul>
    </div>
  );
};

export default VendingMachine;
