import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import "../sass/app.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from "../components/forms/Input";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Objective from "../components/Objective";
import Personal from "../components/Personal";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certificate from "../components/Certificate";
import Reference from "../components/Reference";
import Footer from "../components/Footer";
import PrintHeader from "../components/PrintSection/Header";
import PrintObjective from "../components/PrintSection/Objective";
import PrintPersonal from "../components/PrintSection/Personal";
import PrintEducation from "../components/PrintSection/Education";
import PrintExperience from "../components/PrintSection/Experience";
import PrintSkills from "../components/PrintSection/Skills";
import PrintCertificate from "../components/PrintSection/Certificate";
import PrintReference from "../components/PrintSection/Reference";
import PrintFooter from "../components/PrintSection/Footer";
import html2pdf from "html2pdf.js";

function Index() {
  const [section, setSection] = useState("Header");
  const printRef = useRef();
  const [header, setHeader] = useState(false);
  const [headers, setheaders] = useState({
    fullname: "",
    address: "",
    contact: "",
    email: "",
    img: "",
  });
  const [personal, setpersonal] = useState(false);
  const [personalinfo, setpersonalinfo] = useState({
    gender: "",
    bday: "",
    placebirth: "",
    religion: "",
    marital: "",
    height: "",
    weight: "",
  });

  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };
  const [educ, seteduc] = useState(false);
  const [educations, setEducations] = useState([
    {
      id: uid(),
      educlevel: "",
      major: "",
      schoolname: "",
      startdate: "",
      enddate: "",
    },
  ]);
  const [exp, setexp] = useState(false);
  const [experience, setexperience] = useState([
    {
      id: uid(),
      companyName: "",
      address: "",
      position: "",
      startdate: "",
      enddate: "",
    },
  ]);

  const [skill, setskill] = useState(false);
  const [skills, setskills] = useState([""]);

  const [cert, setcert] = useState(false);
  const [certificate, setcertificate] = useState([
    {
      id: uid(),
      name: "",
      description: "",
      startdate: "",
      enddate: "",
    },
  ]);

  const [charRef, setCharRef] = useState(false);
  const [charReference, setcharReference] = useState([
    {
      id: uid(),
      name: "",
      contact: "",
      position: "",
    },
  ]);

  const [ischeck, setischeck] = useState(false);
  const handleChangeHeaders = (field, e) => {
    const value = e.target.value;
    setheaders((prev) => ({
      ...prev,
      [field]: value,
    }));
    setHeader(true);
  };

  const handleChangePersonalInfo = (field, e) => {
    const value = e.target.value;
    setpersonalinfo((prev) => ({
      ...prev,
      [field]: value,
    }));
    setpersonal(true);
  };

  const handleChangeEducation = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
    seteduc(true);
  };

  const handleChangeExperience = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setexperience(updated);
    setexp(true);
  };

  const handleChangeSkills = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setskills(updated);
    setskill(true);
  };

  const handleChangeCertificate = (index, field, value) => {
    const updated = [...certificate];
    updated[index][field] = value;
    setcertificate(updated);
    setcert(true);
  };

  const handleChangeCharReference = (index, field, value) => {
    const updated = [...charReference];
    updated[index][field] = value;
    setcharReference(updated);
    setCharRef(true);
  };

  useEffect(() => {
    console.log(personalinfo);
    console.log(headers.img);
  }, [personalinfo, headers]);

  const [objectives, setobjectives] = useState(false);

  const [objective, setobjective] = useState();

  const handleNavClick = (section) => {
    setSection(section);
  };

  const renderSection = () => {
    switch (section) {
      case "Header":
        return (
          <Header
            headers={headers}
            handleChangeHeaders={handleChangeHeaders}
            handleImageChange={handleImageChange}
          />
        );
      case "Objective":
        return (
          <Objective
            objective={objective}
            setobjective={setobjective}
            setobjectives={setobjectives}
          />
        );
      case "Personal":
        return (
          <Personal
            personalinfo={personalinfo}
            handleChangePersonalInfo={handleChangePersonalInfo}
          />
        );
      case "Education":
        return (
          <Education
            educations={educations}
            handleChangeEducation={handleChangeEducation}
            uid={uid}
            setEducations={setEducations}
          />
        );
      case "Experience":
        return (
          <Experience
            experience={experience}
            handleChangeExperience={handleChangeExperience}
            uid={uid}
            setexperience={setexperience}
          />
        );
      case "Skills":
        return (
          <Skills
            skills={skills}
            handleChangeSkills={handleChangeSkills}
            setskills={setskills}
          />
        );
      case "Certificate":
        return (
          <Certificate
            certificate={certificate}
            handleChangeCertificate={handleChangeCertificate}
            uid={uid}
            setcertificate={setcertificate}
          />
        );
      case "Reference":
        return (
          <Reference
            charReference={charReference}
            handleChangeCharReference={handleChangeCharReference}
            uid={uid}
            setcharReference={setcharReference}
          />
        );
      case "Footer":
        return <Footer ischeck={ischeck} setischeck={setischeck} />;
      default:
        return null;
    }
  };

  const handlePrint = () => {
    window.print();
    /* console.log(printRef.current.offsetHeight) */
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setheaders((prev) => ({
          ...prev,
          img: reader.result, // base64 image string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    const element = printRef.current;
    const opt = {
      margin:       0,
      filename:     `${headers.fullname} resume.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  };
  

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  return (
    <div className="p-5 ">
      <h1 className="fw-bold">Simple Resume Builder</h1>
      <p className="fs-4 text-secondary">
        Create your resume in just a minutes!
      </p>
      <div className="row m-0 p-0">
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-0 m-0">
          <Navbar
            section={section}
            setSection={setSection}
            handleNavClick={handleNavClick}
          />
          <div className="bg-white p-3">{renderSection()}</div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-0 m-0 ">
          <div className="d-flex justify-content-center px-lg-3 px-md-0 px-sm-0 px-0  m-lg-0 m-md-3 m-sm-3 m-3">
            <div className="a4-page " ref={printRef}>
              {header ? <PrintHeader headers={headers} /> : ""}
              {objectives ? <PrintObjective objective={objective} /> : ""}
              {personal ? (
                <PrintPersonal
                  personalinfo={personalinfo}
                  formatDate={formatDate}
                />
              ) : (
                ""
              )}
              {educ ? (
                <PrintEducation
                  educations={educations}
                  formatDate={formatDate}
                />
              ) : (
                ""
              )}
              {exp ? (
                <PrintExperience
                  experience={experience}
                  formatDate={formatDate}
                />
              ) : (
                ""
              )}
              {skill ? <PrintSkills skills={skills} /> : ""}
              {cert ? (
                <PrintCertificate
                  certificate={certificate}
                  formatDate={formatDate}
                />
              ) : (
                ""
              )}
              {charRef ? <PrintReference charReference={charReference} /> : ""}
              {ischeck ? <PrintFooter name={headers.fullname} /> : ""}
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-dark" onClick={handlePrint}>
              <i className="bi bi-file-earmark-pdf"></i>
              <span className="px-2">Print PDF</span>
            </button>
            <button className="btn btn-dark ms-2" onClick={handleDownloadPDF}>
              <i className="bi bi-download"></i>
              <span className="px-2">Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
