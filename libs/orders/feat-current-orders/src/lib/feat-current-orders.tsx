import styles from './feat-current-orders.module.css';

/* eslint-disable-next-line */
export interface FeatCurrentOrdersProps {}

export function FeatCurrentOrders(props: FeatCurrentOrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatCurrentOrders!</h1>
    </div>
  );
}

export default FeatCurrentOrders;
