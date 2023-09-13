import React from "react";

export default function OfficeMaps() {
  return (
    <div>
      {" "}
      <iframe
        title="OFFICE LOCATION"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14387.591393830173!2d85.04358104672733!3d25.641515633474327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1694282150514!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0, filter: "invert(90%)" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
