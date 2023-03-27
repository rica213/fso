import React from "react";

const Feedback = ({ label, result }) => {
  return (
    <p>
      {label} {result}
    </p>
  );
};

export default Feedback;
