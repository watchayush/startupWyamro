import React from "react";
import Gallery from "../../components/organisms/Gallery/Gallery";
import "./TourGallery.css";
import { Typography } from "@mui/material";
import { galleryImages } from "./constant";

export default function TourGallery() {
  return (
    <div className="tourGalleryContainer">
      <div className="tourGalleryVidContainer">
        <video
          className="tourGalleryVideo"
          controls={false}
          muted={true}
          loop
          autoPlay={true}
        >
          <source
            src={`https://wyamroassets.s3.ap-south-1.amazonaws.com/Bhimtal-HY.mp4`}
            type="video/mp4"
          />
        </video>
        <Typography className="headOfficeTitle">
          WYAMRO head office location Bhimtal
        </Typography>
      </div>
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}
