import React from 'react'
import { Link } from 'react-router-dom'
const chocolate = () => {
  return (
    <div>
    <div className="snack-name">Chocolate</div>
    <div>
      <img
        src="/chocolate-bar.jpg"
        alt="chocolate"
        style={{ width: "800px", height: "800px" }}
      />
    </div>
    <Link to="/">Go Back</Link>
  </div>
    
  )
}

export default chocolate