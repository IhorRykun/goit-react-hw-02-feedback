import { Feedback } from 'components/feedback/feedback';

export const App = () => {
  return (
    <div>
      <Feedback good={0} netural={0} bad={0} total={0} positiveFeedback={0} />
    </div>
  );
};
