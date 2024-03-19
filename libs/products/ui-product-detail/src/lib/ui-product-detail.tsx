import styles from './ui-product-detail.module.css';

import { Buttons } from '@crystalshop/shared/ui/react/buttons';

/* eslint-disable-next-line */
export interface UiProductDetailProps {}

export function UiProductDetail(props: UiProductDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiProductDetail!</h1>
      <Buttons />
    </div>
  );
}

export default UiProductDetail;
