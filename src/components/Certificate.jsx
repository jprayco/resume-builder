import React, { useEffect, useState } from "react";
import CertificateFields from "./Certificate/CertificateFields";

function Certificate({
  certificate,
  handleChangeCertificate,
  uid,
  setcertificate,
}) {
  
  const addCertificate = () => {
    setcertificate([
      ...certificate,
      { id: uid(), name: "", description: "", startdate: "", enddate: "" },
    ]);
  };

  const removeCertificate = (id) => {
    setcertificate(certificate.filter((e) => e.id !== id));
  };

  useEffect(()=>{
    console.log(certificate)
  }, [])
  return (
    <div>
      <h5>Experience</h5>
      {certificate.map((cert, index) => (
      <div key={cert.id} className="">
        <CertificateFields
          name={cert.name}
          description={cert.description}
          startdate={cert.startdate}
          enddate={cert.enddate}
          setname={(value) => handleChangeCertificate(index, "name", value)}
          setdescription={(value) => handleChangeCertificate(index, "description", value)}
          setstartdate={(value) => handleChangeCertificate(index, "startdate", value)}
          setenddate={(value) => handleChangeCertificate(index, "enddate", value)}
        />
        {certificate.length > 1 && (
          <button className="btn btn-danger mt-2" onClick={() => removeCertificate(cert.id)}>
            Remove
          </button>
        )}
        <hr></hr>
      </div>
      
    ))}
    <button className="btn btn-dark" onClick={addCertificate}>
      Add experience
    </button>
    </div>
  );
}

export default Certificate;
