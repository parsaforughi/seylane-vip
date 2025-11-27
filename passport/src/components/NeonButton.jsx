import React from "react";

function NeonButton({ children, className = "", ...rest }) {
  return (
    <button className={`neon-btn ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  );
}

export default NeonButton;
