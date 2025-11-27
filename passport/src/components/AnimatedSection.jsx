import React from "react";

function AnimatedSection({ children, delay = 0 }) {
  return (
    <div className="animated-section" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default AnimatedSection;
