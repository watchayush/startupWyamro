import React from "react";
import "./Members.css";
// import Member from "../../components/molecules/Member/Member";
import { members } from "../Home/constant";
import SingleMember from "../../components/molecules/SingleMember/SingleMember";

export default function Members() {
  return (
    <div className="membersContainer">
      {members && members?.map((member, i) => <SingleMember member={member} />)}
    </div>
  );
}
