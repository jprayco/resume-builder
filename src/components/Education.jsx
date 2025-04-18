import React, { useState } from "react";
import EducationFields from "./Education/EducationFields";

function Education({uid, educations, handleChangeEducation, setEducations}) {
  const addEducation = () => {
    setEducations([
      ...educations,
      { id: uid(), educlevel: "", schoolname: "", startdate: "", enddate: "" },
    ]);
  };

  const removeEducation = (id) => {
    setEducations(educations.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h5>Educational Background</h5>
      {educations.map((edu, index) => (
        <div key={edu.id} className="">
          <EducationFields
            educlevel={edu.educlevel}
            major={edu.major}
            schoolname={edu.schoolname}
            startdate={edu.startdate}
            enddate={edu.enddate}
            seteduclevel={(value) => handleChangeEducation(index, "educlevel", value)}
            setmajor={(value) => handleChangeEducation(index, "major", value)}
            setschoolname={(value) => handleChangeEducation(index, "schoolname", value)}
            setstartdate={(value) => handleChangeEducation(index, "startdate", value)}
            setenddate={(value) => handleChangeEducation(index, "enddate", value)}
          />
          {educations.length > 1 && (
            <button className="btn btn-danger mt-2" onClick={() => removeEducation(edu.id)}>
              Remove
            </button>
          )}
          <hr></hr>
        </div>
        
      ))}
      <button className="btn btn-dark" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export default Education;
