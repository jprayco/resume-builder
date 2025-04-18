import React from "react";

function Experience({experience, formatDate}) {
  return (
    <div>
      <hr></hr>
      <div className="Experience">
        <h6 className="fw-bold ">Work Experience</h6>
        {experience.map((exp, index)=>(
          <div className=" row m-0 p-0" key={index}>
          <div className="col-4">
          {exp.startdate !== "" ?     <span className="fw-bold"> {formatDate(exp.startdate)} - {formatDate(exp.enddate)}</span> : ""}
        
          </div>
          <div className="col-8">
            <p className="p-0 m-0">
              <span className="fw-bold">{exp.companyName} </span>
            </p>
            <p className="p-0 m-0">
              <span>{exp.address} </span>
            </p>
            <p className="p-0 m-0">
              <span>{exp.position} </span>
            </p>
          </div>
        </div>
        ))}
       
      </div>
    </div>
  );
}

export default Experience;
