import React from "react";

function Navbar({ section, setSection, handleNavClick }) {
  /*   console.log(section); */
  return (
    <div>
      <nav className="d-flex justify-content-between border w-100">
        <span
          className={`p-3 ${section === "Header" ? "bg-white" : ""}`}
          onClick={() => handleNavClick("Header")}
        >
          Header
        </span>
        <span
          className={`p-3 ${section === "Objective" ? "bg-white" : ""}`}
          onClick={() => handleNavClick("Objective")}
        >
          Objective
        </span>
        <span
          className={`p-3 ${section === "Personal" ? "bg-white" : ""}`}
          onClick={() => handleNavClick("Personal")}
        >
          Personal
        </span>

        <div
          className={`dropdown ${
            !["Personal", "Objective", "Header"].includes(section)
              ? "bg-white"
              : ""
          }`}
        >
          <div
            className="p-3 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots"></i>
          </div>
          <ul className="dropdown-menu">
            <li
              className={`py-1 px-3 ${
                section === "Education" ? "bg-light" : ""
              }`}
            >
              <span onClick={() => handleNavClick("Education")}>Education</span>
            </li>
            <li
              className={`py-1 px-3 ${
                section === "Experience" ? "bg-light" : ""
              }`}
            >
              <span onClick={() => handleNavClick("Experience")}>
                Experience
              </span>
            </li>
            <li
              className={`py-1 px-3 ${section === "Skills" ? "bg-light" : ""}`}
            >
              <span onClick={() => handleNavClick("Skills")}>Skills</span>
            </li>
            <li
              className={`py-1 px-3 ${
                section === "Certificate" ? "bg-light" : ""
              }`}
            >
              <span onClick={() => handleNavClick("Certificate")}>
                Certificate/s
              </span>
            </li>
            <li
              className={`py-1 px-3 ${
                section === "Reference" ? "bg-light" : ""
              }`}
            >
              <span onClick={() => handleNavClick("Reference")}>Reference</span>
            </li>
            <li
              className={`py-1 px-3 ${
                section === "Footer" ? "bg-light" : ""
              }`}
            >
              <span onClick={() => handleNavClick("Footer")}>Footer</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
