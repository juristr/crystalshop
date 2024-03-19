import styles from './feat-past-orders.module.css';

/* eslint-disable-next-line */
export interface FeatPastOrdersProps {}

export function FeatPastOrders(props: FeatPastOrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatPastOrders!</h1>
    </div>
  );
}

export default FeatPastOrders;
