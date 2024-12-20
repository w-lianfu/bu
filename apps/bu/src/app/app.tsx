import NxWelcome from './nx-welcome';
import { Core } from '@bu/core';

interface IProps {}

const App = (props: IProps) => {
  return (
    <div>
      <NxWelcome title="bu" />
      <Core />
    </div>
  );
};

export default App;
