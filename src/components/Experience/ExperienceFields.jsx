import React from "react";
import Input from "../forms/Input";

function ExperienceFields({
  companyName,
  address,
  position,
  startdate,
  enddate,
  setcompanyName,
  setaddress,
  setposition,
  setstartdate,
  setenddate,
}) {
  return (
    <div >
      <Input
        type="text"
        description="Company Name"
        value={companyName}
        getValue={(e) => setcompanyName(e.target.value)}
      />
      <Input
        type="text"
        description="Address"
        value={address}
        getValue={(e) => setaddress(e.target.value)}
      />
      <Input
        type="text"
        description="Position"
        value={position}
        getValue={(e) => setposition(e.target.value)}
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
      <hr></hr>
    </div>
  );
}

export default ExperienceFields;
