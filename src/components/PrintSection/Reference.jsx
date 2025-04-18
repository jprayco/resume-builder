import React from "react";

function Reference({ charReference }) {
  return (
    <div>
      <hr></hr>
      <div className="CharacterReference">
        <h6 className="fw-bold ">Character Reference</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {charReference.map((ref, index) => (
              <tr key={index}>
                <td>{ref.name} </td>
                <td>{ref.contact} </td>
                <td>{ref.position} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reference;
