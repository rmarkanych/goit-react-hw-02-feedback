//import Feedback from 'components/Feedback/Feedback';
import React from 'react';
import Button from 'components/Button/Button';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feadback = state => {
    return Object.keys(state);
  };

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <>
        <Section wrapper={'Please leave feedback'}>
          <Button content={this.feadback(this.state)} />
        </Section>

        <Section wrapper={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage={Math.round(
              (good / (good + neutral + bad)) * 100
            )}
          />
        </Section>
      </>
    );
  }
}

export default App;
