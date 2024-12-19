import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn btn-primary m-1" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
