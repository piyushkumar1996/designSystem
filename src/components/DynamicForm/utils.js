import React from "react";
import "./form.css";

export const form_schema = {
  heading: "A Dynamic form",
  subHeading: "Form based on schema",
  fields: [
    {
      type: "text",
      name: "firstName",
      label: "Enter first name",
      placeholder: "Please enter first name",
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    {
      type: "text",
      name: "lastName",
      label: "Enter last Name",
      placeholder: "Please enter last name",
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    {
      type: "number",
      name: "age",
      label: "Enter age",
      placeholder: "Please enter age",
      required: true,
      min: 18,
      max: 60,
    },
    {
      type: "radio",
      name: "gender",
      label: "Select gender",
      required: true,
      options: ["male", "female", "others"],
    },
    {
      type: "select",
      name: "country",
      label: "Select country",
      required: true,
      options: [
        { id: 1, label: "India" },
        { id: 2, label: "Japan" },
        { id: 3, label: "Srilanka" },
      ],
    },
    {
      type: "checkbox",
      name: "terms",
      label: "Please accept the terms and condition",
      required: true,
    },
  ],
};

export const Field_Mappper = {
  text: ({ type, ...rest }) => <input type="text" {...rest} />,
  number: ({ type, ...rest }) => <input type="number" {...rest} />,
  select: ({ type, options, ...rest }) => (
    <select {...rest}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  ),
  radio: ({ options, name, required, onChange, value }) => {
    return (
      <div className="flex_item">
        {options.map((item) => (
          <>
            <input
              type="radio"
              name={name}
              required={required}
              onChange={onChange}
              value={item}
              checked={value === item}
            />
            <label htmlFor={item}>{item}</label>
          </>
        ))}
      </div>
    );
  },
  checkbox: ({ name, label, value, required, onChange }) => {
    return (
      <div className="flex_item">
        <input
          type="checkbox"
          checked={!!value}
          name={name}
          required={required}
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  },
};
