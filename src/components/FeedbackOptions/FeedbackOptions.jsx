import React from "react";
import { ButtonFeedback, ButtonStyle } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return ( 
        <ButtonFeedback>
          <ButtonStyle name="good" onClick={onLeaveFeedback} type="button">Good</ButtonStyle>
          <ButtonStyle name="neutral" onClick={onLeaveFeedback} type="button">Neutral</ButtonStyle>
          <ButtonStyle name="bad" onClick={onLeaveFeedback} type="button">Bad</ButtonStyle>
     </ButtonFeedback>);
}
 
export default FeedbackOptions;