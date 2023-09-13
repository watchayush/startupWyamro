import React, { useEffect } from "react";
import "./Course.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";

export default function Course({ course, courseType }) {
  useEffect(() => {
    console.log("course ==> ", course);
  }, [course]);
  return (
    <div class="courseCard">
      <div class="header">
        <span class="title">{course?.name}</span>
        {/* <span class="price">Free</span> */}
      </div>
      <p class="desc">{courseType}</p>
      <table>
        <tbody class="lists">
          {/* <ul > */}
          {course?.duration && (
            <tr class="list">
              <td>
                <CheckCircleRoundedIcon />
              </td>
              <td>Duration:</td>
              <td>
                <span>
                  {"  "}
                  {course?.duration}
                </span>
              </td>
            </tr>
          )}
          {course?.duration && (
            <tr class="list">
              <td>
                <CheckCircleRoundedIcon />
              </td>
              <td>Eligibility:</td>
              <td>
                <span>{course?.eligibility}</span>
              </td>
            </tr>
          )}
          {course?.NSQF_Level && (
            <tr class="list">
              <td>
                <CheckCircleRoundedIcon />
              </td>
              <td>NSQF Level:</td>
              <td>
                <span>{course?.NSQF_Level}</span>
              </td>
            </tr>
          )}

          {/* </ul> */}
        </tbody>
      </table>
      <button type="button" className="action">
        {/* Register */}
        <Link to="/admissionForm" className="registerBtn">
          Register
        </Link>
      </button>
    </div>
  );
}
