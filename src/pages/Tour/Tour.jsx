import React, { useEffect, useState } from "react";
import "./Tour.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { prepareData, videosData } from "./constant";
import { motion } from "framer-motion";
import EastIcon from "@mui/icons-material/East";
import { Typography } from "@mui/material";

export default function Tour() {
  const [allVideosData, setAllVideosData] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    setAllVideosData(prepareData(videosData));
  }, []);

  useEffect(() => {
    if (allVideosData) {
      setSelectedVideo(allVideosData[0]);
    }
  }, [allVideosData]);

  useEffect(() => {
    if (selectedVideo) {
      let tempUrl = `${selectedVideo?.url}`;
      setUrl(tempUrl); //process.env.PUBLIC_URL + ${selectedVideo?.url}
    }
  }, [selectedVideo]);

  const handleSliderChange = async (val, index) => {
    if (selectedVideo) {
      await setSelectedVideo({});
      setUrl();
    }
    let tempVal = val;
    tempVal.selected = true;
    // setAllVideosData(prepareData(allVideosData, index));

    setSelectedVideo(tempVal);
  };

  const variants = {
    slide: {
      opacity: [0, 1],
      x: [500, 0],
    },
  };

  return (
    <div className="tourContainer">
      {allVideosData && url && selectedVideo && (
        <motion.div
          initial={{ clipPath: "circle(3.6% at 0 99%)" }}
          animate={{
            clipPath: "circle(640.4% at 0 99%)",
            // transition: "2s ease",
            transitionProperty: "clip-path",
          }}
          transition={{
            duration: 5,
          }}
        >
          <video
            className="tourVideo"
            controls={false}
            muted={true}
            loop
            autoPlay={true}
          >
            <source
              src={url} //process.env.PUBLIC_URL + `${selectedVideo?.url}`
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
      <div className="tourSectionContainer">
        <div className="tourSection1">
          <div className="contentSection">
            <motion.div
              className="contentContainer"
              variants={variants}
              animate="slide"
            >
              <h4 className="contentHeading">{selectedVideo?.heading}</h4>
              <Typography className="content">{selectedVideo?.text}</Typography>
              <Link to="/" className="moveToGallery">
                Gallery <EastIcon />
              </Link>
            </motion.div>
            <div className="mediaIcons">
              <a href="https://www.facebook.com/wyamro?mibextid=ZbWKwL">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/WyamroF?t=GI6v5dtnkQxwNo0cTKnfgw&s=08">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/wyamro_foundation/">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="tourSection2">
          <div className="sliderBtn">
            {allVideosData &&
              selectedVideo &&
              allVideosData?.map((vid, i) => {
                return (
                  <div
                    key={i}
                    className="radioBtn"
                    selected={allVideosData[i]?.selected}
                    onClick={() => handleSliderChange(allVideosData[i], i)}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
