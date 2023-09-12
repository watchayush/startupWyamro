import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  caroselImages,
  facilitiesNdCampus,
  wyamroDescription,
  allCourses,
  coreMembers,
} from "./constant";
import "./Home.css";
import { Typography } from "@mui/material";
import SingleCard from "../../components/molecules/SingleCard/SingleCard";
import MultiCardCarousel from "../../components/organisms/Gallery/MultiCardCarousel/MultiCardCarousel";
import CarouselImgComp from "../../components/molecules/CarouselImgComp/CarouselImgComp";

export default function Home() {
  return (
    <div className="homeContainer">
      <Carousel showThumbs={false} className="caroselStyle">
        {caroselImages?.map((car) => (
          <div className="carCont">
            <CarouselImgComp carouselDetails={car} />
            {/* <img src={process.env.PUBLIC_URL + car.url} /> */}
          </div>
        ))}
      </Carousel>

      <div className="descSection">
        <div className="foundationDescLeft">
          <Typography className="welcomeHeading">Welcome to WYAMRO</Typography>
          <div className="descPara">{wyamroDescription}</div>
        </div>
        <div className="foundationDescRight"></div>
      </div>

      <div className="facilitiesWrap">
        {facilitiesNdCampus &&
          facilitiesNdCampus?.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <div>
                  <img src={process.env.PUBLIC_URL + slide.url} alt="" />
                </div>
                <div className="desc">
                  <Typography className="descTypo">{slide?.desc}</Typography>
                </div>
              </div>
            );
          })}
      </div>
      <div className="coursesOfferedContainer">
        <div className="coursesOfferedHeading">Courses offered</div>
        <MultiCardCarousel allCourses={allCourses} />
      </div>

      <div className="coreMembersContainer">
        <div className="coreMembersHeading">Our Eastern Zone Members</div>
        <MultiCardCarousel coreMembers={coreMembers?.eastern_zone} />
      </div>
    </div>
  );
}
