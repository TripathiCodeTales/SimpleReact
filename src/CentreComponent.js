import React from "react";

const CentreComponent = ({ Detail }) => {
  return (
    <>
      <div>
        <h4 className="subTitle">{Detail.name}</h4>
      </div>
      <div className="fullDetail">
        <div className="CentreDetail">Name : {Detail.name}</div>
        <div className="CentreDetail">Email : {Detail.email}</div>
        <div className="CentreDetail">Number : {Detail.number}</div>
        <div className="CentreDetail">City : {Detail.City}</div>
        <div className="CentreDetail">State : {Detail.State}</div>
        <div className="CentreDetail">Country : {Detail.Country}</div>
        <div className="CentreDetail">Organization : {Detail.Organization}</div>
        <div className="CentreDetail">Job Profile : {Detail.JobProfile}</div>
        <div className="CentreDetail">
          Additional Info : {Detail.AdditionalInfo}
        </div>
      </div>
    </>
  );
};

export default CentreComponent;
