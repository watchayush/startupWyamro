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
import MultiCardCarousel from "../../components/organisms/Gallery/MultiCardCarousel/MultiCardCarousel";
import CarouselImgComp from "../../components/molecules/CarouselImgComp/CarouselImgComp";
import ImageSlider from "../../components/molecules/ImageSlider/ImageSlider";

export default function Home() {
  const focusToCourses = () => {
    document.getElementById("courseOffered").scrollIntoView();
  };
  return (
    <div className="homeContainer">
      <Carousel showThumbs={false} className="caroselStyle">
        {caroselImages?.map((car) => (
          <div className="carCont">
            <CarouselImgComp
              carouselDetails={car}
              focusToCourses={focusToCourses}
            />
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

      <div className="imageSliderContainer">
        <div className="imageSliderTextContainer">
          <div className="imageTxt">
            At Dayanand Public School, on the auspicious eve of hanuman Jayanti
            a Health and awareness program was organized, in which Dr. Rajkumar
            Singh, Dr. Arvind,Respected Ramlakhan Singh, Sanjeev Kumar, Kumar
            Pandey, Ajay Saheb, from Nalanda district, Bhagalpur, and a large
            number of students, parents, and present faculty members
            participated. A heartfelt thank you to all the dignitaries for
            making the program a success. Thank you to all the guests. Jai Hind.\n
            Dr. Rajkumar Singh Principal Dayanand Public School, Patna
          </div>
        </div>
        <div className="imSlidr">
          <ImageSlider />
        </div>
      </div>

      <div className="facilitiesWrap">
        {facilitiesNdCampus &&
          facilitiesNdCampus?.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + slide.url}
                    alt="Facilities"
                  />
                </div>
                <div className="desc">
                  <Typography className="descTypo">{slide?.desc}</Typography>
                </div>
              </div>
            );
          })}
      </div>
      <div className="coursesOfferedContainer" id="courseOffered">
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
