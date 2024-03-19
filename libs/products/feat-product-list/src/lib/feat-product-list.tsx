import styles from './feat-product-list.module.css';

/* eslint-disable-next-line */
export interface FeatProductListProps {}

export function FeatProductList(props: FeatProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatProductList!</h1>
    </div>
  );
}

export default FeatProductList;
