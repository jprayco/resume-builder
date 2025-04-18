import React from "react";

function Objective({ objective }) {
  return (
    <div>
      <hr></hr>
      <div className="Objective">
        <h6 className="fw-bold ">Objective</h6>
        <p className="">{objective}</p>
      </div>
    </div>
  );
}

export default Objective;
