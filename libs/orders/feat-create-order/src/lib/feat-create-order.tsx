import styles from './feat-create-order.module.css';

/* eslint-disable-next-line */
export interface FeatCreateOrderProps {}

export function FeatCreateOrder(props: FeatCreateOrderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatCreateOrder!</h1>
    </div>
  );
}

export default FeatCreateOrder;
