import styles from './feat-product-list.module.css';

import { UiProductDetail } from '@crystalshop/products/ui-product-detail';
import { Buttons } from '@crystalshop/shared/ui/react/buttons';

/* eslint-disable-next-line */
export interface FeatProductListProps {}

export function FeatProductList(props: FeatProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatProductList!</h1>
      <UiProductDetail />
      <Buttons />
    </div>
  );
}

export default FeatProductList;
