import React from "react";

const StatisticLine = ({ label, result }) => {
  return (
    <p>
      {label} {result}
    </p>
  );
};

export default StatisticLine;
