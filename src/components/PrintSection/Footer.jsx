import React from "react";

function Footer({name}) {
  return (
    <div>
      <div className="">
        <p className="">
          <i>
            I hereby certify that the above information is true and correct to
            the best of my knowledge.
          </i>
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <div className="text-center">
          <p className="p-0 m-0">
            <u> {name} </u>
          </p>
          <p>Applicant</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
