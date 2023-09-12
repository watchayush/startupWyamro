import React from "react";
import AdmissionForm from "../../components/organisms/Gallery/AdmissionForm/AdmissionForm";
import "./Admission.css";

export default function Admission() {
  return (
    <div
      className="admissionContainer"
      style={{
        backgroundImage: "url('/images/home/admission.png')",
        height: "100vh",
        marginTop: "4em",
      }}
      data-scroll-index="7"
    >
      <AdmissionForm />
    </div>
  );
}
