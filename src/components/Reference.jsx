import React, { useEffect, useState } from 'react'
import ReferenceFields from './Reference/ReferenceFields';

function Reference({
  charReference,
  handleChangeCharReference,
  uid,
  setcharReference,
}) {
  const addcharReference = () => {
    setcharReference([
      ...charReference,
      { id: uid(), name: "", position: "", contact: "" },
    ]);
  };

  const removecharReference = (id) => {
    setcharReference(charReference.filter((e) => e.id !== id));
  };

  useEffect(()=>{
    console.log(charReference)
  }, [])
  return (
    <div>
      <h5>Character Reference</h5>
      {charReference.map((ref, index) => (
      <div key={ref.id} className="">
        <ReferenceFields
          name={ref.name}
          contact={ref.contact}
          position={ref.position}
          setname={(value) => handleChangeCharReference(index, "name", value)}
          setcontact={(value) => handleChangeCharReference(index, "contact", value)}
          setposition={(value) => handleChangeCharReference(index, "position", value)}
        />
        {charReference.length > 1 && (
          <button className="btn btn-danger mt-2" onClick={() => removecharReference(ref.id)}>
            Remove
          </button>
        )}
        <hr></hr>
      </div>
      
    ))}
    <button className="btn btn-dark" onClick={addcharReference}>
      Add Reference
    </button>
    </div>
  );
}

export default Reference
