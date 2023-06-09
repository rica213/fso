import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const handleBadFeedback = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <Header title="give feedback" />
      <Button handleFeedback={handleGoodFeedback} label="good" />
      <Button handleFeedback={handleNeutralFeedback} label="neutral" />
      <Button handleFeedback={handleBadFeedback} label="bad" />
      <Header title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
