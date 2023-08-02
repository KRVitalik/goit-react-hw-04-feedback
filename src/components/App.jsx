import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import { Container } from "./App.styled";

class App extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    handleButtonClick = ({target}) => {
        this.setState(
            (prevState) => {
                return { [target.name]: prevState[target.name] + 1 }
            })
    }

    countTotalFeedback () {
        let { good, neutral, bad } = this.state
        let total = good + neutral + bad
        return total 
    }
    
    countPositiveFeedbackPercentage = () => {
        let { good, neutral, bad } = this.state
        let total = good + neutral + bad

        if (good === 0) {
            return 0
        } return Math.round(100 / (total) * good)
        
  }
  
  
  render() {
      return <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButtonClick} />
        </Section>
        {this.countTotalFeedback() === 0
          ? <Notification message="There is no feedback" />
          : <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>}
    </Container>;
  }
}
 
export default App;
