import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

  // const findCourseList = (coursesToShow, totalCourses, course) => {
  //   if (!coursesToShow.length) {
  //     for (var i = 0; i < totalCourses.length; i++) {
  //       if (course === totalCourses?.[i]?.courseType) {
  //         coursesToShow.push(totalCourses[i]);
  //         break;
  //       } else {
  //         if (totalCourses[i]?.courses && totalCourses[i]?.courses?.length)
  //           findCourseList(coursesToShow, totalCourses[i]?.courses, course);
  //       }
  //     }
  //   } else {
  //     return coursesToShow;
  //   }
  //   return coursesToShow;
  // };

  useEffect(() => {
    let arr = loc?.pathname.split("/");
    let course = arr[arr?.length - 1];
    let coursesToShow = [];
    coursesToShow = allCourses?.filter((c) => course === c.courseType);
    // coursesToShow = findCourseList([], allCourses, course);
    console.log("coursesToShow ==> ", coursesToShow);
    setCourseType(coursesToShow?.[0]?.name);
    setCourseList(coursesToShow?.[0]?.courses);
  }, [loc]);
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
