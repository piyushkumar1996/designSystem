import React, { useState } from "react";
import { Field_Mappper, form_schema } from "./utils";
import "./form.css";

const FormComponent = () => {
  const { heading, subHeading, fields } = form_schema;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h2>{heading}</h2>
      <h3>{subHeading}</h3>
      <form className="form_container" onSubmit={handleSubmit}>
        {fields.map((field) => {
          const Component = Field_Mappper[field.type];
          return (
            <div className="form_field">
              {field.type !== "checkbox"  && (
                <label htmlFor={field.name}>{field.label}</label>
              )}
              <Component
                onChange={handleChange}
                value={formData[field.name]}
                {...field}
              />
            </div>
          );
        })}
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default FormComponent;
