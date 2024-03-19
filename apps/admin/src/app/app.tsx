// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { utils } from '@crystalshop/shared/utils';
import { Buttons } from '@crystalshop/shared/ui/react/buttons';

import { FeatCreateOrder } from '@crystalshop/orders/feat-create-order';
import { FeatCurrentOrders } from '@crystalshop/orders/feat-current-orders';
import { FeatPastOrders } from '@crystalshop/orders/feat-past-orders';

import NxWelcome from './nx-welcome';

export function App() {
  console.log('test');
  utils();
  return (
    <div>
      <NxWelcome title="admin" />
      <Buttons />
    </div>
  );
}

export default App;
