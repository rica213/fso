import React from "react";
import Part from "./Part";

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0].name} content={parts[0].exercises} />
      <Part part={parts[1].name} content={parts[1].exercises} />
      <Part part={parts[2].name} content={parts[2].exercises} />
    </div>
  );
};

export default Content;
