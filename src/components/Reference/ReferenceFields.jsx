import React from "react";
import Input from "../forms/Input";

function ReferenceFields({
  name,
  contact,
  position,
  setname,
  setcontact,
  setposition,
}) {
  return (
    <div>
      <Input
        type="text"
        description="Name"
        value={name}
        getValue={(e) => setname(e.target.value)}
      />
      <Input type="text" description="Contact No."
        value={contact}
        getValue={(e) => setcontact(e.target.value)}
      />
      <Input
        type="text"
        description="Position"
        value={position}
        getValue={(e) => setposition(e.target.value)}
      />
    </div>
  );
}

export default ReferenceFields;
