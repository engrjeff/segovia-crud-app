import React from "react";

function Input({ label, name, placeholder, value, onChange, type = "text" }) {
  return (
    <div className='form-group px-3'>
      <label htmlFor={name} className='form-label mt-2'>
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className='form-control'
        placeholder={placeholder || name}
      />
    </div>
  );
}

export default Input;
