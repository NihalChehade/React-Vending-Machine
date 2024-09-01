import React from 'react'
import { Link } from 'react-router-dom'

const Chips = () => {
  return (
    
     <div>
     <div className="snack-name">Chips</div>
     <div>
       <img
         src="/chips.jpg"
         alt="chips"
         style={{ width: "800px", height: "800px" }}
       />
     </div>
     <Link to="/">Go Back</Link>
   </div>
    
  )
}

export default Chips