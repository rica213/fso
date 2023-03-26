import React from "react";
import Part from './Part';

const Content = ({ part, content }) => {
  return (
    <div>
      <Part part={part[0]} content={content[0]} />
      <Part part={part[1]} content={content[1]} />
      <Part part={part[2]} content={content[2]} />
    </div>
  );
};

export default Content;
