import React, { useState } from 'react'
import ExperienceFields from './Experience/ExperienceFields';

function Experience({uid, experience, handleChangeExperience, setexperience}) {
  const addExperience = () => {
    setexperience([
      ...experience,
      { id: uid(), expclevel: "", schoolname: "", startdate: "", enddate: "" },
    ]);
  };

  const removeExperience = (id) => {
    setexperience(experience.filter((e) => e.id !== id));
  };
  
    return (
      <div>
        <h5>Experience</h5>
        {experience.map((exp, index) => (
        <div key={exp.id} className="">
          <ExperienceFields
            companyName={exp.companyName}
            address={exp.address}
            position={exp.position}
            startdate={exp.startdate}
            enddate={exp.enddate}
            setcompanyName={(value) => handleChangeExperience(index, "companyName", value)}
            setaddress={(value) => handleChangeExperience(index, "address", value)}
            setposition={(value) => handleChangeExperience(index, "position", value)}
            setstartdate={(value) => handleChangeExperience(index, "startdate", value)}
            setenddate={(value) => handleChangeExperience(index, "enddate", value)}
          />
          {experience.length > 1 && (
            <button className="btn btn-danger mt-2" onClick={() => removeExperience(exp.id)}>
              Remove
            </button>
          )}
          <hr></hr>
        </div>
        
      ))}
      <button className="btn btn-dark" onClick={addExperience}>
        Add experience
      </button>
      </div>
    );
}

export default Experience
