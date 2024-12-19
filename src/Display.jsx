import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="display p-3 bg-light border rounded text-end">
      <h2>{value}</h2>
    </div>
  );
};

export default Display;
