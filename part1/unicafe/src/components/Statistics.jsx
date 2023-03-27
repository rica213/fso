import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <p> No feedback given </p>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine label="good" result={good} />
        </tr>
        <tr>
          <StatisticLine label="neutral" result={neutral} />
        </tr>
        <tr>
          <StatisticLine label="bad" result={bad} />
        </tr>
        <tr>
          <StatisticLine label="all" result={good + neutral + bad} />
        </tr>
        <tr>
          <StatisticLine
            label="average"
            result={((good - bad) / (good + neutral + bad)).toFixed(2)}
          />
        </tr>
        <tr>
          <StatisticLine
            label="positive"
            result={((good * 100) / (good + neutral + bad)).toFixed(2) + `%`}
          />
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
