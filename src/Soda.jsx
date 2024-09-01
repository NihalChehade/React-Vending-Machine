import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div>
      <div className="snack-name">Soda</div>
      <div>
        <img
          src="/soda.jpg"
          alt="soda"
          style={{ width: "800px", height: "800px" }}
        />
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Soda;
