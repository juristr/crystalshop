// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { utils } from '@crystalshop/utils';

import NxWelcome from './nx-welcome';

export function App() {
  console.log('test');
  utils();
  return (
    <div>
      <NxWelcome title="admin" />
    </div>
  );
}

export default App;
