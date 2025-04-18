import React from "react";

function Personal({
  personalinfo, formatDate
}) {

  const age = (bday)=>{
    const today = new Date();
    const birthDate = new Date(bday);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  }
  return (
    <div>
      <hr></hr>
      <div className="Personal">
        <h6 className="fw-bold ">Personal Information</h6>
        <div className="row m-0 p-0">
          <div className="col-6 p-0 m-0 ">
            <div>
              {personalinfo.gender != "" ? (
                <p className="p-0 m-0">
                  <span>Gender : </span>
                  <span> {personalinfo.gender}</span>
                </p>
              ) : (
                ""
              )}

              {personalinfo.bday !== "" ? (
                <p className="p-0 m-0">
                  <span>Age : </span>
                  <span>{age(personalinfo.bday)} y/o</span>
                </p>
              ) : (
                ""
              )}

              {personalinfo.bday !== "" ? (
                <p className="p-0 m-0">
                  <span>Date of Birth : </span>
                  <span>{formatDate(personalinfo.bday)} </span>
                </p>
              ) : (
                ""
              )}
              {personalinfo.placebirth !== "" ? (
                <p className="p-0 m-0">
                  <span>Place of birth : </span>
                  <span>{personalinfo.placebirth} </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-6 p-0 m-0">
            <div>
              {personalinfo.religion !== "" ? (
                <p className="p-0 m-0">
                  <span>Religion : </span>
                  <span>{personalinfo.religion} </span>
                </p>
              ) : (
                ""
              )}

              {personalinfo.marital !== "" ? (
                <p className="p-0 m-0">
                  <span>Marital Status : </span>
                  <span>{personalinfo.marital} </span>
                </p>
              ) : (
                ""
              )}
              {personalinfo.height !== "" ? (
                <p className="p-0 m-0">
                  <span>Height : </span>
                  <span>{personalinfo.height}</span>
                </p>
              ) : (
                ""
              )}
              {personalinfo.weight !== "" ? (
                <p className="p-0 m-0">
                  <span>Weight : </span>
                  <span>{personalinfo.weight} </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
