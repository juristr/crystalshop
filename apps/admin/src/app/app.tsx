// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  console.log('test 12');
  return (
    <div>
      <NxWelcome title="admin" />
    </div>
  );
}

export default App;
