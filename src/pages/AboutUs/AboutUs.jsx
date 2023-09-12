import React from "react";
import About from "../../components/molecules/About/About";
import { coreMembers } from "../Home/constant";
import MultiCardCarousel from "../../components/organisms/Gallery/MultiCardCarousel/MultiCardCarousel";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <About />
      <div className="founderMembersContainer">
        <div className="founderMembersHeading">Founder Members</div>
        <MultiCardCarousel coreMembers={coreMembers?.core_members} />
      </div>
    </div>
  );
}
