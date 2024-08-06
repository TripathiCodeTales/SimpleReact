import React from "react"; 
import "./App.css"

const SideComponent = ({title, email,number,OnDetailClick}) => {

const handleOnDetailClick = (id) => {
 OnDetailClick(+id)
 alert(id)
 console.log({id})
}
return(
    <div className = "sideComponent">
     <h4 className="subTitle">{title}</h4>
     <div className="basicDetail">
     {email}
     </div>
     <br></br>
     <div className="basicdet">
     {number}
     </div>
     <div>
        <button onClick = {(id)=>handleOnDetailClick(id)} className="btn">
            Click to view Detail
        </button>
     </div>
    </div>
)
}

export default SideComponent; 