import React from "react";
import "./InputField.css";

export default function InputField({
  type = "text",
  name,
  placeholder,
  className,
  autofocus,
  required = "false",
  maxlength,
  value,
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className ? className : "textBoxClass"}
        autofocus={autofocus}
        required={required}
        maxlength={maxlength}
        value={value}
      />
    </div>
  );
}
