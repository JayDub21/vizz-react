import React from 'react';

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className='from-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type='text'
        className='form-control'
      />
      {/* ↓↓ error must be truthy else expression is ignored ↓↓ */}
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
