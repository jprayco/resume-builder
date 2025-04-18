import React from "react";
import Header from "./PrintSection/Header";
import Objective from "./PrintSection/Objective";
import Personal from "./PrintSection/Personal";
import Education from "./PrintSection/Education";
import Experience from "./PrintSection/Experience";
import Skills from "./PrintSection/Skills";
import Certificate from "./PrintSection/Certificate";
import Reference from "./PrintSection/Reference";

function PrintableArea() {
  return (
    <div>
      <Header />
      <Objective />
      <Personal />
      <Education />
      <Experience />
      <Skills />
      <Certificate />
      <Reference />

    </div>
  );
}

export default PrintableArea;
