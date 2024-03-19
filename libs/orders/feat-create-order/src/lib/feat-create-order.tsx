import styles from './feat-create-order.module.css';

import { FormControls } from '@crystalshop/shared/ui/react/form-controls';
import { dataAccessOrder } from '@crystalshop/orders/data-access-order';
/* eslint-disable-next-line */
export interface FeatCreateOrderProps {}

export function FeatCreateOrder(props: FeatCreateOrderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatCreateOrder!</h1>
      <FormControls />
    </div>
  );
}

export default FeatCreateOrder;
