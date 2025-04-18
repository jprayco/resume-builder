import React from "react";
import Input from "./forms/Input";

function Skills({ skills, setskills, handleChangeSkills }) {
  // Add an empty skill input
  const addSkill = () => {
    setskills([...skills, ""]);
  };

  // Remove skill at given index
  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setskills(updated);
  };



  return (
    <div>
      <h5>Skills</h5>
      {skills.map((skill, index) => (
        <div key={index} className="d-flex">
          <Input
            type="text"
            value={skill}
            getValue={(e) => handleChangeSkills(index, e.target.value)}
          />
          {skills.length  > 1 && <div className="d-flex align-items-end"><button
            type="button"
            className="btn btn-sm btn-danger ms-2"
            onClick={() => removeSkill(index)}
          >
            Remove
          </button></div> }
          
        </div>
      ))}
      <button className="btn btn-dark px-5 mt-3" onClick={addSkill}>
        Add
      </button>
    </div>
  );
}

export default Skills;
