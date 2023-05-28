import React from "react";

const DynamicButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="dynamic-button">
      {children}
    </button>
  );
};

export default DynamicButton;
