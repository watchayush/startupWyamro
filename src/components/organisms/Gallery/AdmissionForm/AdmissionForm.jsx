import React from "react";
import "./AdmissionForm.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InputField from "../../../atoms/InputField/InputField";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SchoolIcon from "@mui/icons-material/School";
import { allCourses } from "../../../../pages/Home/constant";

export default function AdmissionForm() {
  return (
    <div className="admissionFormContainer">
      <form method="post" autocomplete="on">
        <div className="boxContainer">
          <label for="name" className="fl fontLabel">
            {" "}
            Name:{" "}
          </label>
          <div className="new iconBox">
            <PersonIcon />
          </div>
          <div className="fr">
            <InputField name="name" placeholder="Name" required={true} />
          </div>
          <div className="clr"></div>
        </div>
        <div className="boxContainer">
          <label for="phone" className="fl fontLabel">
            {" "}
            Phone No.:{" "}
          </label>
          <div className="fl iconBox">
            <PhoneIcon />{" "}
          </div>
          <div className="fr">
            <InputField
              required={true}
              name="phoneNo"
              maxlength="10"
              placeholder="Phone No."
            />
          </div>
          <div className="clr"></div>
        </div>
        <div className="boxContainer">
          <label for="email" className="fl fontLabel">
            {" "}
            Email ID:{" "}
          </label>
          <div className="fl iconBox">
            <EmailIcon />
          </div>
          <div className="fr">
            <InputField
              type="email"
              required={true}
              name="email"
              placeholder="Email Id"
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="boxContainer">
          <label for="aadhar" className="fl fontLabel">
            {" "}
            Aadhar Number:{" "}
          </label>
          <div className="new iconBox">
            <FingerprintIcon />
          </div>
          <div className="fr">
            <InputField
              name="aadhar"
              placeholder="Enter aadhar number"
              required={true}
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="boxContainer">
          <label for="cars" className="fl fontLabel">
            {" "}
            Choose a course:{" "}
          </label>
          <div className="new iconBox">
            <SchoolIcon />
          </div>
          <div className="fr">
            <select id="cars" name="cars" className="textBoxClass">
              {allCourses?.map((certificate) => {
                return certificate?.courses?.map((course) => {
                  return <option value={course?.value}>{course?.name}</option>;
                });
              })}
            </select>
          </div>
        </div>

        <div className="boxContainer radio">
          <label for="gender" className="fl fontLabel">
            {" "}
            Gender:{" "}
          </label>
          <input type="radio" name="Gender" value="Male" required /> Male &nbsp;
          &nbsp; &nbsp; &nbsp;
          <input type="radio" name="Gender" value="Female" /> Female
        </div>

        <div className="boxContainer terms">
          <input type="checkbox" name="Terms" required={true} /> &nbsp; I accept
          the terms and conditions
        </div>

        <div className="boxContainer" style={{ background: "#2d3e3f" }}>
          <InputField
            type="Submit"
            name="Submit"
            className="submitBtn"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
}
