import styles from './ui-order-detail.module.css';
import { Buttons } from '@crystalshop/shared/ui/react/buttons';

/* eslint-disable-next-line */
export interface UiOrderDetailProps {}

export function UiOrderDetail(props: UiOrderDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiOrderDetail!</h1>
      <Buttons />
    </div>
  );
}

export default UiOrderDetail;
