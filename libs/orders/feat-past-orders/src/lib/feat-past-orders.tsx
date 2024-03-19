import styles from './feat-past-orders.module.css';

import { UiOrderDetail } from '@crystalshop/orders/ui-order-detail';
import { dataAccessOrder } from '@crystalshop/orders/data-access-order';

/* eslint-disable-next-line */
export interface FeatPastOrdersProps {}

export function FeatPastOrders(props: FeatPastOrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatPastOrders!</h1>
      <UiOrderDetail />
    </div>
  );
}

export default FeatPastOrders;
