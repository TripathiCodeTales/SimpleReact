import React from "react"; 
import "./App.css"

const SideComponent = ({title, email,number,OnDetailClick}) => {

const handleOnDetailClick = (email) => {
 alert(`Name: ${email}`)
 OnDetailClick(email)
}
return(
    <div className = "sideComponent">
     <h4 className="subTitle">{title}</h4>
     <div className="basicDetail">
        {/* <label>
            <input value={email} id="name" readOnly/>
        </label> */}
     {email}
     </div>
     <br></br>
     <div className="basicdet">
     {number}
     </div>
     <div>
        <button 
        onClick = 
        {(id)=>handleOnDetailClick(email)}
         className="btn">
            Click to view Detail
        </button>
     </div>
    </div>
)
}

export default SideComponent; 