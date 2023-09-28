import React from "react";
import { styled } from "styled-components";
import "./CarouselImgComp.css";
import { motion } from "framer-motion";

export default function CarouselImgComp({ carouselDetails, focusToCourses }) {
  const imgUrl = process.env.PUBLIC_URL + carouselDetails.url;

  //   ${(props) => props.imgUrl && `background-image: (${props.imgUrl})`}
  const CarCont = styled.div`
    ${(props) => props.imgUrl && `background-image: url(${props.imgUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  `;
  const variants = {
    slide: {
      opacity: [0, 1],
      x: [700, 0],
    },
  };
  return (
    <>
      <CarCont imgUrl={imgUrl} className="carImgCont">
        <motion.div
          variants={variants}
          animate="slide"
          className="carouselBannerContainer"
        >
          <div className="carouselBannerRight">
            <div className="carouselBanner">
              World Yoga and Alternative Medicine Research Organisation
            </div>
            <button
              className="coursesBtn"
              onClick={() => {
                focusToCourses();
              }}
            >
              View Courses
            </button>
          </div>
        </motion.div>
      </CarCont>
    </>
  );
}
