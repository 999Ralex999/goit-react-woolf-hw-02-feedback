import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        display: 'flex',
        color: '#010101',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.total() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total()}
            positivePercentage={this.positivePercentage()}
          />
        ) : (
          <Notification message="No feedback is available" />
        )}
      </Section>
    </div>
  );
};
