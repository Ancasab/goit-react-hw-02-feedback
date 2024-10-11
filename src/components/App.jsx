// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
// import PropTypes from "prop-types";
// import css from './App.module.css';



export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    onLeaveFeedback = state => {
        this.setState(prevState => ({ [state]: prevState[state] + 1 }))
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
        
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback;
        if (total > 0) return Math.round((good / total) * 100);
        return 0;
    }

    render() {
        const { good, neutral, bad } = this.state;
        // const options = Object.keys(this.state);
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedback ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={positivePercentage}
                        />
                        ) : (
                            <Notification message="There is no feedback" />
                        )}
                </Section>
            </>
        );
    } 
}
            
        