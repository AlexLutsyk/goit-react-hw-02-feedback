import { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }

   countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
   };
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good  / this.countTotalFeedback()) * 100);
  };


  onLeaveFeedback = (evt) => {
    
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
  };


  render() {
    return (
      <>
        <Section title= "Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={ this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    )
  }

  

}

export default App;
