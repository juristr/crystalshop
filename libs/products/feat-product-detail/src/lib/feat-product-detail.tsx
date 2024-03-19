import styles from './feat-product-detail.module.css';

/* eslint-disable-next-line */
export interface FeatProductDetailProps {}

export function FeatProductDetail(props: FeatProductDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatProductDetail!</h1>
    </div>
  );
}

export default FeatProductDetail;
