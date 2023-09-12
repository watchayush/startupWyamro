import React from "react";
import "./ContactDetails.css";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { offices } from "./constant";

export default function ContactDetails() {
  return (
    <div className="contact-info">
      <h2 className="contact-title">Contact Details</h2>
      <p>
        Please reach out to us at the below contact number. You can also mail us
        at the below given mailId. Along with that, please feel free to visit
        our offices at the below given address.
      </p>
      <ul className="contact-info">
        <li>
          <div className="info-left">
            <CallIcon className="contactIcons" />
          </div>
          <div className="info-right">
            <h4>+91 - 9472232821</h4>
          </div>
        </li>
        <li>
          <div className="info-left">
            <MailOutlineIcon className="contactIcons" />
          </div>
          <div className="info-right">
            <h4>infowyamro@gmail.com</h4>
          </div>
        </li>
        <li>
          <div className="info-left">
            <RoomIcon className="contactIcons" />
          </div>
          <div className="info-right">
            {offices?.map((office) => {
              return (
                <h4 className="officeDetails">
                  <span className="officeName">{office?.name}</span>
                  <span className="officeAddress">{office?.address}</span>
                </h4>
              );
            })}
          </div>
        </li>
      </ul>
    </div>
  );
}
