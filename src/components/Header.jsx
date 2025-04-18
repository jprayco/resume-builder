import React from "react";
import Input from "./forms/Input";


function Header({ 
  headers,
  handleChangeHeaders, handleImageChange}) {

    

  return (
    <div>
      <h5>Header</h5>
      <Input type="text" description="Full Name" value={headers.fullname} getValue={(e)=>handleChangeHeaders("fullname",e)}/>
      <Input type="text" description="Address" value={headers.address} getValue={(e)=>handleChangeHeaders("address",e)}/>
      <Input type="text" description="Contact No." value={headers.contact} getValue={(e)=>handleChangeHeaders("contact",e)} />
      <Input type="email" description="Email" value={headers.email} getValue={(e)=>handleChangeHeaders("email",e)}/>
      <Input type="file" description="Insert Image" getValue={(e)=>handleImageChange(e)} />
    </div>
  );
}

export default Header;
