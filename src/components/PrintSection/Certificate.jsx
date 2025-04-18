import React from "react";

function Certificate({ certificate, formatDate }) {
  return (
    <div>
      <hr></hr>
      <div className="Certificate">
        <h6 className="fw-bold ">Certificate/s</h6>

        {certificate.map((cert, index) => (
          <div className=" row m-0 p-0" key={index}>
            <div className="col-4">
              <span className="fw-bold">{cert.name} </span>
            </div>
            <div className="col-8">
              <p className="p-0 m-0">
                <span> {cert.description} </span>
              </p>
              <p className="p-0 m-0">
                {cert.startdate !== "" ? (
                  <span>Validity : {formatDate(cert.startdate)} - </span>
                ) : (
                  ""
                )}
                {cert.enddate !== "" ? (
                  <span> {formatDate(cert.enddate)}</span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        ))}

        <br />
      </div>
    </div>
  );
}

export default Certificate;
