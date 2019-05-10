import React from 'react';

export default ({ tag }) => {
  return (
    <span className="bg-primary text-white badge dish-badge py-2 px-4 mr-2">{tag}</span>
  );
};