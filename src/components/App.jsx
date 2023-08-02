import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import { Container } from "./App.styled";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
    
  const handleButtonClick = ({ target }) => {
    target.name === "good"
      ? setGood(prevState => prevState + 1)
      : target.name === "neutral"
        ? setNeutral(prevState => prevState + 1)
        : setBad(prevState => prevState + 1);
    }

    const countTotalFeedback = () => {
        let total = good + neutral + bad
        return total 
    }
    
    const countPositiveFeedbackPercentage = () => {
        let total = good + neutral + bad

        if (good === 0) {
            return 0
        } return Math.round(100 / (total) * good)
        
  }
  
      return <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={handleButtonClick} />
        </Section>
        {countTotalFeedback() === 0
          ? <Notification message="There is no feedback" />
          : <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        </Section>}
    </Container>;
  }
 
export default App;
