import React from 'react'

function Skills({skills}) {
  return (
    <div>
      <hr></hr>
      <div className="Skills">
        <h6 className="fw-bold ">Skills</h6>
        {skills.map((skill, index)=>(
          <p className="p-0 m-0" key={index}>
          <small>
            <i className="bi bi-circle-fill fs-05 px-3"></i>
          </small>
          {skill}
        </p>
        ))}
        
      
      </div>
    </div>
  )
}

export default Skills
