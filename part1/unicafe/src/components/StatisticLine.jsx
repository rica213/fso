import React from "react";

const StatisticLine = ({ label, result }) => {
  return (
    <>
      <td>{label}</td>
      <td>{result}</td>
    </>
  );
};

export default StatisticLine;
