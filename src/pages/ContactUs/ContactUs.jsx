import React from "react";
import "./ContactUs.css";
import ContactDetails from "../../components/organisms/Gallery/ContactDetails/ContactDetails";
import OfficeMaps from "../../components/organisms/Gallery/OfficeMaps/OfficeMaps";

export default function ContactUs() {
  return (
    <div>
      <section
        className="section-bg"
        style={{
          backgroundImage: "url('/images/home/yogaImage3.jpg')",
        }}
        data-scroll-index="7"
      >
        <div className="overlay pt-100 pb-100 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <ContactDetails />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-form">
                  <OfficeMaps />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
