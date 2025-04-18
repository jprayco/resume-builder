import React from "react";
import Input from "../forms/Input";

function CertificateFields({
  name,
  description,
  startdate,
  enddate,
  setname,
  setdescription,
  setstartdate,
  setenddate,
}) {
  return (
    <div>
      <Input
        type="text"
        description="Certificate Name"
        value={name}
        getValue={(e) => setname(e.target.value)}
      />
      <Input
        type="text"
        description="Description"
        value={description}
        getValue={(e) => setdescription(e.target.value)}
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

export default CertificateFields;
