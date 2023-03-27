import React from 'react';

const Button = ({handleFeedback, label}) => {
  return (
    <button onClick={handleFeedback}>{label}</button>
  )
}

export default Button;
