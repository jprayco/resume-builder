import React from "react";

function Education({ educations , formatDate}) {
  return (
    <div>
      <hr />
      <div className="Education">
          <h6 className="fw-bold">Educational Background</h6>
          {educations.map((edu, index) => (
            <div className="Tertiary row m-0 p-0"  key={index}>
            <div className="col-4">
              <span className="fw-bold">{edu.educlevel}</span>
            </div>
            <div className="col-8">
            {["Tertiary", "Senior High"].includes(edu.educlevel) ?  <p className="p-0 m-0">
                <span className="fw-bold">{edu.major}</span>
              </p> : ""}
             
              <p className="p-0 m-0">
                <span>{edu.schoolname}</span>
              </p>
              {edu.startdate !== "" ? <p className="p-0 m-0">
                <span>{formatDate(edu.startdate)}</span> - <span>{formatDate(edu.enddate)}</span>
              </p>: "" }
              
            </div>
          </div>
      ))}
          <br />
        </div>
  
    </div>
  );
}

export default Education;
