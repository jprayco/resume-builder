import React from "react";

function Header({ headers }) {
  return (
    <div>
      <div className="Header">
        <div className="row m-0 p-0">
          <div className="col-8 p-0 m-0  d-flex align-items-end">
            <div>
              <h4 className="fw-bold p-0 m-0">{headers.fullname}</h4>
              <p className="p-0 m-0">{headers.address}</p>
              <p className="p-0 m-0">{headers.contact} </p>
              <p className="p-0 m-0">{headers.email} </p>
            </div>
          </div>
          <div className="col-4 p-0 m-0">
            {headers.img !== "" ? (
              <div className="img-container">
                <img src={headers.img} alt="Image" className="img-fluid" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
