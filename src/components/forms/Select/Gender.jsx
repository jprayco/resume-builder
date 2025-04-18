import React from "react";

function Gender({ value, getValue, description }) {
  return (
    <div>
      <label htmlFor="" className="">
        {description}
      </label>
      <select className="form-control" value={value} onChange={getValue}>
        <option value="" disabled>
          --
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
}

export default Gender;
