import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='from-group'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className='form-control' />
      {/* ↓↓ error must be truthy else expression is ignored ↓↓ */}
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
