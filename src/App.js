import React, { Component } from 'react';
// import './App.css';
import Section from './components/Feedback/Section/Section';
import Statistics from './components/Feedback/Statistics/Statistics';
import FeedbackOptions from './components/Feedback/FeedbackOptions/FeedbackOptions';
import Notification from './components/Feedback/Notice/Notification';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };

  feedbackClick = (e) => {
    this.setState((prevState) => {
      return {[e.target.name]: Number(prevState[e.target.name] + 1)}
});
  }

  countTotalFeedback = () => {
return Object.values(this.state).reduce((acc, value) => acc + value, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    const percentage = Math.round(this.state.good / total * 100);
    return percentage > 0 ? percentage : 0;
  }

  render() {
    const total = this.countTotalFeedback()
    const goodPercent = this.countPositiveFeedbackPercentage()
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={this.state}
            onLeaveFeedback={this.feedbackClick} />
        </Section>
        <Section title="Statistic">
          {total > 0 ? <Statistics
          good={this.state.good }
          neutral={this.state.neutral }
          bad={this.state.bad }
          total={total}
          positivePercentage={goodPercent}
        /> : <Notification message="No feedback given"/>}
        </Section>
 
      </div>
    )

  }
}

export default App;
