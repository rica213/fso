import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <p> No feedback given </p>;
  }
  return (
    <>
      <StatisticLine label="good" result={good} />
      <StatisticLine label="neutral" result={neutral} />
      <StatisticLine label="bad" result={bad} />
      <StatisticLine label="all" result={good + neutral + bad} />
      <StatisticLine
        label="average"
        result={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
        label="positive"
        result={(good * 100) / (good + neutral + bad) + `%`}
      />
    </>
  );
};

export default Statistics;
