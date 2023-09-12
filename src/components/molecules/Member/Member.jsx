import React from "react";
import "./Member.css";
import { styled } from "styled-components";

export default function Member({ member }) {
  const ImgCont = styled.div`
    ${(props) => props.url && `background-image: url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: auto;
    z-index: 2;
    border: 4px solid #fff;
  `;
  return (
    <div class="login-div">
      <ImgCont className="logo" url={member?.url}></ImgCont>
      <div class="memberName">{member?.name}</div>
      <div class="sub-title">{member?.designation}</div>
      <div class="zone">{member?.zone}</div>
      <div class="memberProfession">{member?.profession}</div>
    </div>
  );
}
