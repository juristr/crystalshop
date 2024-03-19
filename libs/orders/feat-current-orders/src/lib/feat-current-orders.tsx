import styles from './feat-current-orders.module.css';

import { UiOrderDetail } from '@crystalshop/orders/ui-order-detail';
import { dataAccessOrder } from '@crystalshop/orders/data-access-order';

/* eslint-disable-next-line */
export interface FeatCurrentOrdersProps {}

export function FeatCurrentOrders(props: FeatCurrentOrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatCurrentOrders!</h1>
      <UiOrderDetail />
    </div>
  );
}

export default FeatCurrentOrders;
