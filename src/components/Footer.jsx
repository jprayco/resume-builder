import React from "react";
import Input from "./forms/Input";

function Footer({
    ischeck, setischeck
}) {
  return (
    <div>
      <p className="">
        <input type="checkbox" className="mx-2" checked={ischeck} onChange={(e)=> setischeck(e.target.checked)} />
        <i>
          I hereby certify that the above information is true and correct to the
          best of my knowledge.
        </i>
      </p>
    </div>
  );
}

export default Footer;
