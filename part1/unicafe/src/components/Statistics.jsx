import React from "react";
import Feedback from "./Feedback";

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <p> No feedback given </p>;
  }
  return (
    <>
      <Feedback label="good" result={good} />
      <Feedback label="neutral" result={neutral} />
      <Feedback label="bad" result={bad} />
      <Feedback label="all" result={good + neutral + bad} />
      <Feedback
        label="average"
        result={(good - bad) / (good + neutral + bad)}
      />
      <Feedback
        label="positive"
        result={(good * 100) / (good + neutral + bad) + `%`}
      />
    </>
  );
};

export default Statistics;
