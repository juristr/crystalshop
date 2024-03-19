import styles from './feat-product-detail.module.css';

import { UiProductDetail } from '@crystalshop/products/ui-product-detail';

/* eslint-disable-next-line */
export interface FeatProductDetailProps {}

export function FeatProductDetail(props: FeatProductDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatProductDetail!</h1>
      <UiProductDetail />
    </div>
  );
}

export default FeatProductDetail;
