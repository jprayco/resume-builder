import React, { useState } from "react";
import Input from "../forms/Input";

function EducationFields({
  educlevel,
  schoolname,
  startdate,
  enddate,
  major,
  seteduclevel,
  setschoolname,
  setstartdate,
  setenddate,
  setmajor,
}) {
  return (
    <div className="educ">
      <div>
        <label>Select Education Level</label>
        <select
          className="form-control"
          value={educlevel}
          onChange={(e) => seteduclevel(e.target.value)}
        >
          <option disabled value="">
            ---
          </option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="Senior High">Senior High</option>
          <option value="Tertiary">Tertiary</option>
        </select>
      </div>
      {["Tertiary", "Senior High"].includes(educlevel) ?  <Input
        type="text"
        description="Major"
        value={major}
        getValue={(e) => setmajor(e.target.value)}
      /> : ""}
     
      <Input
        type="text"
        description="School Name"
        value={schoolname}
        getValue={(e) => setschoolname(e.target.value)}
      />
      <Input
        type="date"
        description="Start Date"
        value={startdate}
        getValue={(e) => setstartdate(e.target.value)}
      />
      <Input
        type="date"
        description="End Date"
        value={enddate}
        getValue={(e) => setenddate(e.target.value)}
      />
    </div>
  );
}

export default EducationFields;
