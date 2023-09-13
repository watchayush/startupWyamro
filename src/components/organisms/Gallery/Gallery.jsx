import { useState } from "react";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import "./Gallery.css";
import { Typography } from "@mui/material";

const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <CloseRoundedIcon className="btnClose" onClick={handleCloseModal} />
          <ChevronLeftRoundedIcon className="btnPrev" onClick={prevSlide} />
          <ChevronRightRoundedIcon className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].url} alt="gallery Images" />
          </div>
        </div>
      )}

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}
      <div className="galleryHeadingContainer">
        <Typography className="galleryHeading"> Bhimtal Yogic Tour </Typography>
      </div>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages?.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={process.env.PUBLIC_URL + slide.url}
                  alt="galleryImages"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
