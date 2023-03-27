import React from "react";
import Part from "./Part";

const Content = ({course}) => {
  return (
    <div>
      <Part part={course.parts[0].name} content={course.parts[0].exercises} />
      <Part part={course.parts[1].name} content={course.parts[1].exercises} />
      <Part part={course.parts[2].name} content={course.parts[2].exercises} />
    </div>
  );
};

export default Content;
