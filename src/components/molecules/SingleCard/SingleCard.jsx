import React from "react";
import "./SingleCard.css";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function SingleCard({ course }) {
  const ImgCont = styled.div`
    ${(props) => props.url && `background-image: url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: auto;
    margin-top: 20px;
    z-index: 2;
    border: 4px solid #fff;
  `;
  return (
    // <div className="card">{props?.memberData?.name}</div>;
    <div className="cookieCard">
      <ImgCont class="img" url={course?.url}></ImgCont>
      <p className="cookieDescription">{course?.name}</p>
      <button className="acceptButton">
        <Link to="/admissionForm" className="navLink">
          View Courses
        </Link>
      </button>
    </div>
  );
}
