import React from "react";


const CentreComponent = ({Detail}) => {
return (
    <>
    <div>
    <h4 className="subTitle">{Detail.name}</h4>
    </div>
    Name : {Detail.name}
    Email : {Detail.email}
     Number : {Detail.number}
     City : {Detail.city}
      State : {Detail.state}
      Country : {Detail.Country}
      Organization : {Detail.Organization}
       Job Profile : {Detail.JobProfile}
      Additional Info : {Detail.AdditionalInfo}
    </>
)
}

export default CentreComponent;