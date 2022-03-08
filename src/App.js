import { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  options = ['good', 'neutral', 'bad'];

  onIncrement = select => {
    this.setState(prevState => ({
      [select]: prevState[select] + 1,
      visible: true,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const feedback = (100 / this.countTotalFeedback()) * this.state.good;
    return feedback.toFixed();
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback '}>
          <FeedbackOptions
            options={this.options}
            onIncrement={this.onIncrement}
          />
        </Section>

        <Section title={'Statistic'}>
          {this.state.visible ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
export default App;
