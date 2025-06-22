import { useState } from "react";
import { motion } from "framer-motion";
import { imageSliderConst } from "./Constant";
import "./ImageSlider.css";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState(
    imageSliderConst.map((img, index) => index)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3
      );
      return updatedIndexes;
    });
  };

  //   const handleBack = () => {
  //     setPositionIndexes((prevIndexes) => {
  //       const updatedIndexes = prevIndexes.map(
  //         (prevIndex) => (prevIndex + 2) % 3
  //       );

  //       return updatedIndexes;
  //     });
  //   };

  const images = imageSliderConst.map((item) => item.url);

  const positions = ["center", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    // left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    // left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
      <div className="imgSlider">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="sliderImg"
            //   className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute" }}
          />
        ))}
      </div>
      <div className="prevNxtBtnContainer">
        {/* <ArrowBackRoundedIcon
          className="prevNxtBtn"
          onClick={handleBack}
        /> */}
        <ArrowForwardRoundedIcon className="prevNxtBtn" onClick={handleNext} />
      </div>
    </>
  );
};

export default ImageSlider;
