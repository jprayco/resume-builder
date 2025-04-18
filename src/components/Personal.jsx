import React from "react";
import Input from "./forms/Input";
import Gender from "./forms/Select/Gender";

function Personal({
  personalinfo,
  handleChangePersonalInfo
}) {
  return (
    <div>
      <h5>Personal Information</h5>
      <Gender type="text" description="Gender" value={personalinfo.gender} getValue={(e)=>handleChangePersonalInfo("gender",e)} />
      <Input type="date" description="Date of Birth" value={personalinfo.bday} getValue={(e)=>handleChangePersonalInfo("bday",e)}/>
      <Input type="text" description="Place of Birth" value={personalinfo.placebirth} getValue={(e)=>handleChangePersonalInfo("placebirth",e)}/>
      <Input type="text" description="Religion" value={personalinfo.religion} getValue={(e)=>handleChangePersonalInfo("religion",e)}/>
      <Input type="text" description="Marital Status"value={personalinfo.marital} getValue={(e)=>handleChangePersonalInfo("marital",e)} />
      <Input type="text" description="Height" value={personalinfo.height} getValue={(e)=>handleChangePersonalInfo("height",e)}/>
      <Input type="text" description="Weight"value={personalinfo.weight} getValue={(e)=>handleChangePersonalInfo("weight",e)} />
    </div>
  );
}

export default Personal;
