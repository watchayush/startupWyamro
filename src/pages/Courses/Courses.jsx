import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { allCourses } from "../Home/constant";
import "./Courses.css";
import Course from "../../components/molecules/Course/Course";
import { styled } from "styled-components";
import { Typography } from "@mui/material";

export default function Courses() {
  const [courseList, setCourseList] = useState([]);
  const [courseType, setCourseType] = useState("");
  let loc = useLocation();
  const imgUrl = process.env.PUBLIC_URL + "/images/home/certificate.jpg";
  useEffect(() => {
    console.log("location ==> ", loc);
    let arr = loc?.pathname.split("/");
    let course = arr[arr?.length - 1];
    let coursesToShow = allCourses?.filter((c) => {
      if (course === c.courseType) {
        setCourseType(c?.name);
        return c.courses;
      }
    });
    setCourseList(coursesToShow[0]?.courses);
  }, []);
  const Certificate = styled.div`
    ${(props) => props.imgUrl && `background-image: url(${props.imgUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  `;
  return (
    <div className="coursesContainer">
      <Certificate imgUrl={imgUrl} className="certi">
        <Typography className="certificateText">
          {" "}
          Certificate Courses{" "}
        </Typography>
      </Certificate>
      <div className="coursesList">
        {courseList?.map((c) => (
          <div>
            <Course course={c} courseType={courseType} />
          </div>
        ))}
      </div>
    </div>
  );
}
