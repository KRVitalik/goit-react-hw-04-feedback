import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<div>
          <h3>Good: {good}</h3>
          <h3>Neutral: {neutral}</h3>
          <h3>Bad: {bad}</h3>
          <h3>Total: {total}</h3>
        <h3>Positive feedback: {positivePercentage}%</h3>
        </div>);
}
 
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

  export default Statistics;