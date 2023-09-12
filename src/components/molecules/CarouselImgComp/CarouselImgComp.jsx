import React from "react";
import { styled } from "styled-components";
import "./CarouselImgComp.css";

export default function CarouselImgComp({ carouselDetails }) {
  const imgUrl = process.env.PUBLIC_URL + carouselDetails.url;

  //   ${(props) => props.imgUrl && `background-image: (${props.imgUrl})`}
  const CarCont = styled.div`
    ${(props) => props.imgUrl && `background-image: url(${props.imgUrl})`};
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  `;
  return (
    <>
      <CarCont imgUrl={imgUrl} className="carImgCont"></CarCont>
    </>
  );
}
