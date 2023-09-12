import React, { useEffect, useState, useRef } from "react";
import { members } from "./constant";
import SingleCard from "../../../molecules/SingleCard/SingleCard";
import { motion, useAnimate } from "framer-motion";
import "./MultiCardCarousel.css";
import Member from "../../../molecules/Member/Member";

export default function MultiCardCarousel({ allCourses, coreMembers }) {
  const [width, setWidth] = useState();
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const box = useRef();
  //   const box = document.querySelector(".multiCarousel");
  const btnpressprev = () => {
    let width = box?.current.clientWidth;
    box.current.scrollLeft = box?.current.scrollLeft - width;
    console.log(
      width,
      "width",
      "  box  ==> ",
      box,
      "  box.scrollLeft ==> ",
      box?.current.scrollLeft
    );
  };

  const btnpressnext = () => {
    debugger;
    let width = box?.current.clientWidth;
    console.log("  box  ==> ", box);
    let temp = {};
    temp = box?.current;
    temp = { ...temp, scrollLeft: box.current.scrollLeft + width };
    debugger;
    box.current = temp;
    console.log(
      width,
      "width",
      "  box  ==> ",
      box,
      "  box.scrollLeft ==> ",
      box?.current.scrollLeft
    );
  };
  return (
    <motion.div
      className="multiCarouselContainer"
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      {/* <div className="prevBtn" onClick={btnpressprev}>
        <p> &lt; </p>
      </div>
      <div className="nextBtn" onClick={btnpressnext}>
        <p> &gt; </p>
      </div> */}
      <motion.div
        className="multiCarousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {allCourses &&
          allCourses?.map((course, i) => <SingleCard course={course} />)}
        {coreMembers &&
          coreMembers?.map((member, i) => <Member member={member} />)}
      </motion.div>
    </motion.div>
  );
}
